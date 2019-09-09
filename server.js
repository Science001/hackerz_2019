//Imports
const express = require('express')
const { Pool } = require('pg')
const crypto = require('crypto')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const morgan = require('morgan')
const createPage = require('./helpers/templater')
const generateMail = require('./helpers/generateMail')
const nodemailer = require('nodemailer')

//Initialization
require('dotenv').config()
const app = express()
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
})
const eventDetails = require('./helpers/eventDetails.json')
app.use(bodyParser.json())
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan("dev"))
}

app.use(session({
    name: 'sessionID',
    secret: 'cartoonwarriorgiggleinstahackremotinteloboratewelcomingracewaterdriftxopgg',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
    resave: true,
    saveUninitialized: false
}))

let transporter = nodemailer.createTransport({
    host: 'mail.cithackerz.pro',
    port: 465,
    secure: true,
    auth: {
        user: 'no-reply@cithackerz.pro',
        pass: 'hack3rz#cse@CIT'
    }
});

//Helper Functions
function hash(input, salt) {
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ["pdkdf2", "10000", salt, hashed.toString('hex')].join('$');
}

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'login.html'))
})

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'events.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'contact.html'))
})

app.get('/events/:genre', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', `${req.params.genre}.html`))
})

app.get('/event/:name', (req, res) => {
    if (!Object.keys(eventDetails).includes(req.params.name)) {
        res.status(404).send({ message: "No such event found" })
    }
    else {
        res.send(createPage(eventDetails[req.params.name]))
    }
})

app.post('/login', (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send({ message: "Credentials missing" })
    }
    else next()
}, (req, res) => {
    var { email, password } = req.body
    pool.query(`SELECT s.id, s.name, s.email, s.department, s.college, s.password, s.year, array_agg(r.event) as registered_events from students s
            LEFT JOIN registrations r ON r.student = s.id
            WHERE email = $1
            GROUP BY s.id`, [email], (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).send({ message: "Something went Wrong" })
            }
            else {
                if (result.rows.length === 0) {
                    res.status(401).send({ message: "No such user found" })
                }
                else {
                    var actualhashed = result.rows[0].password;
                    var salt = actualhashed.split('$')[2];
                    var givenHashed = hash(password, salt);
                    if (actualhashed === givenHashed) {
                        var user = result.rows[0]
                        user['registered_events'] = user.registered_events.includes(null) ? [] : user.registered_events
                        delete user['password']
                        req.session.user = user
                        res.send({
                            email: user.email,
                            name: user.name,
                            college: user.college,
                            year: user.year,
                            department: user.department,
                            registered_events: user.registered_events
                        })
                    }
                    else {
                        res.status(400).send({ message: "Incorrect Password" })
                    }
                }
            }
        })
})

app.post('/signup', (req, res, next) => {
    var { email, password, name, college, year, department, mobile } = req.body
    if (!college || !password || !name || !email || !year || !department || !mobile) {
        res.status(400).send({ message: "One or more details are missing" })
    }
    else next()
}, (req, res) => {
    var { email, password, name, college, year, department, mobile } = req.body
    var salt = crypto.randomBytes(128).toString('hex')
    var hashedPassword = hash(password, salt)
    pool.query('SELECT email from students where email=$1', [email], (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send({ message: "Something went Wrong" })
        }
        else {
            if (results.rowCount === 0) {
                pool.query('INSERT INTO students(email, password, name, college, year, department, mobile) VALUES($1, $2, $3, $4, $5, $6, $7) returning *', [email, hashedPassword, name, college, year, department, mobile], (err, result) => {
                    if (err) {
                        console.log(err)
                        res.status(500).send({ message: "Something went Wrong" })
                    }
                    else {
                        var user = result.rows[0]
                        user['registered_events'] = []
                        delete user['password']
                        req.session.user = user
                        res.send({
                            email: user.email,
                            name: user.name,
                            college: user.college,
                            year: user.year,
                            department: user.department,
                            registered_events: user.registered_events
                        })
                    }
                })
            }
            else {
                res.status(400).send({ message: "This email ID is already signed up", promptLogin: true })
            }
        }
    })
})

app.get('/whoami', (req, res) => {
    if (req.session.user) {
        var user = req.session.user
        res.send({
            email: user.email,
            name: user.name,
            college: user.college,
            year: user.year,
            department: user.department,
            registered_events: user.registered_events
        })
    }
    else {
        res.send(null)
    }
})

app.post('/logout', (req, res) => {
    if (req.session.user)
        delete req.session['user']
    res.sendStatus(200);
})

app.post('/register/:event', (req, res, next) => {
    if (!req.session.user) {
        res.status(401).send({ message: "You have to be logged in to register for the event" })
    }
    else if (!req.params.event) {
        res.status(400).send({ message: "No Event ID is specified in request" })
    } else {
        var password = req.body.password
        pool.query("SELECT password FROM students WHERE id=$1", [req.session.user.id], (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Something went wrong' })
            } else {
                var actualhashed = result.rows[0].password;
                var salt = actualhashed.split('$')[2];
                var givenHashed = hash(password, salt);
                if (actualhashed === givenHashed) {
                    next()
                } else {
                    res.status(401).send({ message: 'Wrong password' })
                }
            }
        })
    }
}, (req, res) => {
    pool.query("INSERT INTO registrations(student, event) VALUES($1, $2)", [req.session.user.id, req.params.event], (err, _result) => {
        if (err) {
            if (err.message.includes("registrations_pkey")) {
                res.status(403).send({ message: "You have already registered for this event" })
            }
            else if (err.message.includes("registrations_event_fkey")) {
                res.status(400).send({ message: "Invalid event name" })
            }
            else {
                res.status(500).send({ message: "Something went Wrong" })
            }
        }
        else {
            var user = req.session.user
            user['registered_events'].push(req.params.event)
            req.session.user = user
            res.send({ message: "Successfully registered for the event" })
        }
    })
})

app.post('/generateOD', (req, res, next) => {
    if (!req.session.user) {
        res.status(401).send({ message: "You have to be logged in to register for the event" })
    } else if (req.session.user.registered_events == []) {
        res.status(400).send({ message: 'You haven\'t registered for any events' })
    } else {
        next()
    }
}, (req, res) => {
    var user = req.session.user

    var message = {
        from: 'no-reply@cithackerz.pro',
        to: user.email,
        subject: 'OD Letter for Hackerz Symposium',
        html: generateMail(user, req.body.papyrus, req.body.focus)
    };
    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: 'Couldn\'t send mail', error: err })
        } else {
            res.status(200).send({ message: 'You will receive mail. If you didn\'t find the mail. Check the spam.' })
        }
    })
})

app.get('/admin/atten/ded', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', `adminAttended.html`))
})

app.post('/admin/atten/ded', (req, res, next) => {
    if(!req.body || !req.body.email) res.status(400).send({message: "Bad Request"})
    else next()
}, (req, res) => {
    pool.query('update students set attended=true where email=$1 returning *', [req.body.email], (err, result) => {
        if(err) {
            res.status(500).send({message: "Something went wrong"})
            console.log(err)
        }
        else {
            if(result.rowCount === 0)
                res.status(404).send({message: "No such student found"})
            else {
                res.send({
                    name: result.rows[0].name,
                    college: result.rows[0].college,
                    year: result.rows[0].year,
                    department: result.rows[0].department,
                    mobile: result.rows[0].mobile
                })
            }
        }
    })
})

app.get('/admin/ons/pot', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', `adminSignup.html`))
})

app.post('/admin/ons/pot', (req, res, next) => {
    var { email, name, college, year, department, mobile } = req.body
    console.log(req.body)
    if (!college || !name || !email || !year || !department || !mobile) {
        res.status(400).send({ message: "One or more details are missing" })
    }
    else next()
}, (req, res) => {
    var { email, name, college, year, department, mobile } = req.body
    pool.query('SELECT email from students where email=$1', [email], (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send({ message: "Something went Wrong" })
        }
        else {
            if (results.rowCount === 0) {
                pool.query('INSERT INTO students(email, name, college, year, department, mobile, attended) VALUES($1, $2, $3, $4, $5, $6, true)', [email, name, college, year, department, mobile], (err, result) => {
                    if (err) {
                        console.log(err)
                        res.status(500).send({ message: "Something went Wrong" })
                    }
                    else {
                        res.sendStatus(200)
                    }
                })
            }
            else {
                res.status(400).send({ message: "This email ID is already signed up", promptLogin: true })
            }
        }
    })
})


app.listen(process.env.PORT || 8000)