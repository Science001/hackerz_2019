module.exports = function createPage(event) {
    var rules = event.rules.map(rule => (`<li>${rule}</li>`))
    var contacts
    if (event.hasContacts)
        contacts = event.contacts.map(contact => (`<a class="contact" href="tel:${contact.number}">${contact.name} <span style="font-size: 12px;">(${contact.number})</span></a>`))
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="../css/bootstrap.min.css">
        <link rel="stylesheet" href="../css/single_event.css">
        <title>Hackerz | ${event.name}</title>
    </head>
    
    <body>
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">
            <img src="../images/NewHackerzWhite.png" width="80" alt="hackerzLogo" class="hackerzLogo" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <a href="/about" class="menu-item nav-link" id="about-btn">
                        About
                    </a>
                    </li>
                    <li class="nav-item">
                    <a href="/about" class="menu-item nav-link" id="about-btn">
                        Contact
                    </a>
                    </li>
                    <li class="nav-item">
                    <a href="/login" class="menu-item" id="login-btn">
                        Login
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="menu-item" id="logout-btn">
                        Logout
                    </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="particle-bg"></div>
        <section class="event-container">
            <h3 class="event-header title glitch" data-text="${event.name}">${event.name}</h3>
            <p style="text-align: center; margin-top: 5px;"><i>${event.tag}</i></p>
            <hr color="white" width="80%" />
            <p class="description">${event.description}</p>
            <hr color="white" />
            <div style="margin: 30px auto;">
                <h5>RULES</h5>
                <ul>
                    ${rules.join('')}
                </ul>
            </div>
            ${!event.unregistered ?
            `
            <p class="h6 error-message" id="register-error-message">Register Error</p>
            <div class="registration">
                <input id="password" type="password" placeholder="Enter your password to confirm your registration" style="flex: 1;"/>
                <div id="register-btn">REGISTER</div>
                <div class="spinner-grow text-light" role="status" id="register-spinner"
                    style="display: none">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>`
            :
            `
            <hr color="white" style="border-top: 1px dotted white;" />
            <div style="margin: 30px auto;">
                <h5 style="margin-top: 30px;">How to register?</h5>
                <p>In order to participate in the event, Email your ${event.whatToSend} to <i>hackerz@citchennai.net</i>
                    with the subject of the email as "${event.name}". In the email body, provide us the following details
                    about yourself:</p>
                <ul>
                    <li>Name</li>
                    <li>College</li>
                    <li>Current year of study</li>
                    <li>Department</li>
                    <li>${event.whatToSend === 'abstract' ? `Phone number` : `Instagram ID`}</li>
                    <li>Attached ${event.whatToSend} file</li>
                </ul>
            </div>`
        }
            ${event.hasContacts ?
            `
            <hr color="white" />
            <div style="margin: 30px auto;">
                <h5>CONTACT</h5>
                <div id="contactsBox">
                    ${contacts.join('')}
                </div>
            </div>` : ``
        }
        </section>
        <script src="../js/jquery.min.js"></script>
        <script src="../js/bootstrap.min.js"></script>
        <script src="../js/axios.min.js"></script>
        <script src="../js/particles.js"></script>
        <script>
            particlesJS.load("particle-bg", "../js/particles-config.json");
            if (!window.localStorage.user) {
                document.getElementById("register-btn").innerText = "Login to Register"
                document.getElementById("register-btn").onclick = function (e) {
                    window.location.href = '/login'
                }
            } else {
                var reg_btn = document.getElementById("register-btn")
                reg_btn.onclick = function (e) {
                    var passwordBox = document.getElementById("password")
                    var register_error_message = document.getElementById("register-error-message")
                    var register_spinner = document.getElementById('register-spinner')
                    if (getComputedStyle(passwordBox, null).display === 'none') {
                        passwordBox.style.display = "initial";
                    }
                    else {
                        reg_btn.style.display = "none"
                        register_spinner.style.display = "inline-block"
                        axios.post('/register/' + window.location.pathname.split('/')[2], {
                            password: document.getElementById('password').value
                        }).then(function (response) {
                            console.log(response);
                            register_error_message.innerText = "Registered Successfully"
                            register_error_message.style.display = "block"
                            register_error_message.style.color = "green"
                            register_spinner.style.display = "none"
                            passwordBox.style.display = "none";

                        }).catch(function (err) {
                            console.log(err);
                            register_spinner.style.display = "none"
                            reg_btn.style.display = "block"
                            if (err.response) {
                                if (err.response.status == 403) {
                                    reg_btn.style.display = "none"   
                                    passwordBox.style.display = "none";
                                    register_error_message.style.color = "green"
                                }
                                register_error_message.innerText = err.response.data.message
                            } else {
                                register_error_message.innerText = "Something went wrong"
                            }
                            register_error_message.style.display = "block"
                            register_error_message.style.color = "#FF2323"
                        })
                    }
                }
            }
        </script>
        <script src="../js/loginHelper.js"></script>
    </body>
    
    </html>`
}