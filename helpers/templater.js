module.exports = function createPage(event) {
    var rules = event.rules.map(rule => (`<li>${rule}</li>`))
    var contacts
    if(event.hasContacts)
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
      <nav>
          <a href="/events"><img src="../images/NewHackerzWhite.png" width="80" alt="hackerzLogo"
                  class="hackerzLogo" /></a>
          <a href="/login" id="login-btn">
              Login
          </a>
      </nav>
      <div id="particle-bg"></div>
      <section class="event-container">
      <h3 class="event-header title glitch" data-text="${event.name}">${event.name}</h3>
      <p style="text-align: center; margin-top: 5px;"><i>${event.tag}</i></p>
      <hr color="white" width="80%"/>
          <p class="description">${event.description}</p>
          <hr color="white"/>
          <div style="margin: 30px auto;">
          <h5>RULES</h5>
          <ul>
              ${rules.join('')}
          </ul>
          </div>
          ${!event.unregistered ?
            `<div class="registration">
              <input id="password" type="password" placeholder="Enter your password to confirm your registration" />
              <div id="register-btn">REGISTER</div>
          </div>`
            :
            `<hr color="white" style="border-top: 1px dotted white;"/>
          <div style="margin: 30px auto;">
          <h5 style="margin-top: 30px;">How to register?</h5>
          <p>In order to participate in the event, Email your ${event.whatToSend} to <i>hackerz@citchennai.net</i> with the subject of the email as "${event.name}". In the email body, provide us the following details about yourself:</p>
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
            `<hr color="white" />
            <div style="margin: 30px auto;">
            <h5>CONTACT</h5>
            <div id="contactsBox">
            ${contacts.join('')}
            </div>
        </div>` : ``
        }
      </section>
  
      <script src="../js/bootstrap.min.js"></script>
      <script src="../js/particles.js"></script>
      <script>
          particlesJS.load("particle-bg", "../js/particles-config.json");
          document.getElementById("register-btn").onclick = function(e) {
              var passwordBox = document.getElementById("password")
              if(getComputedStyle(passwordBox, null).display === 'none') {
                  passwordBox.style.display = "initial";
              }
              else {
                  console.log("Register")
                  // send registration
              }
              
          }
      </script>
  </body>
  
  </html>`
}