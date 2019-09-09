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
        <script src="../js/axios.min.js"></script>
        <script src="../js/whoamiHelper.js"></script>
        <title>Hackerz | ${event.name}</title>
    </head>
    
    <body>
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">
    <a href="/">
    <div style="display: flex; flex-direction: row;">
        <img src="../images/CIT Logo White.png" class="logo"
            style="padding-left: 0; border-right: 1px solid white;" />
        <img src="../images/NewHackerzWhite.png" class="logo" />
    </div>
    </a>
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
                    <a href="/events" class="menu-item nav-link" id="about-btn">
                        Events
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
            event.closed ? `<div id="registration-closed-btn">REGISTRATION CLOSED</div>` 
            :
            `
            <p class="h6 error-message" id="register-error-message">Register Error</p>
            <div id="registered-btn">REGISTERED</div>
            <div class="registration" id="register-div">
                <input id="password" type="password" placeholder="Enter your password to confirm your registration"
                    style="flex: 1;" />
                <div id="register-btn">REGISTER</div>
                <div class="spinner-grow text-light" role="status" id="register-spinner" style="display: none">
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
        <script src="../js/particles.js"></script>
        <script src="../js/loginHelper.js"></script>
        <script src="../js/registrationHelper.js"></script>
    </body>
    
    </html>`
}