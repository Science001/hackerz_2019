var reg_btn = document.getElementById("register-btn")
var reg_div = document.getElementById("register-div")
var registered_btn = document.getElementById("registered-btn")
var passwordBox = document.getElementById("password")
var register_error_message = document.getElementById("register-error-message")
var register_spinner = document.getElementById('register-spinner')

var eventName = window.location.pathname.split('/')[2]

if (!window.localStorage.user) {
    document.getElementById("register-btn").innerText = "Login to Register"
    document.getElementById("register-btn").onclick = function (e) {
        e.preventDefault()
        window.location.href = "/login?callbackUrl=" + window.location.pathname
    }
} else {
    var user = JSON.parse(window.localStorage.user)
    if (user.registered_events.includes(eventName)) {
        reg_div.style.display = "none"
        registered_btn.style.display = "block"
    } else {
        reg_div.style.display = "flex"
        registered_btn.style.display = "none"

        reg_btn.onclick = function (e) {
            if (getComputedStyle(passwordBox, null).display === 'none') {
                passwordBox.style.display = "initial";
            }
            else {
                reg_btn.style.display = "none"
                register_spinner.style.display = "inline-block"

                axios.post('/register/' + eventName, {
                    password: document.getElementById('password').value
                }).then(function (response) {
                    console.log(response);
                    reg_div.style.display = "none"
                    registered_btn.style.display = "block"
                    register_error_message.style.display = "none"
                }).catch(function (err) {
                    console.log(err);
                    register_spinner.style.display = "none"
                    reg_btn.style.display = "block"
                    if (err.response) {
                        if (err.response.status == 403) {
                            reg_div.style.display = "none"
                            registered_btn.style.display = "block"
                            register_error_message.style.display = "none"
                        } else {
                            register_error_message.style.display = "block"
                        }
                        register_error_message.innerText = err.response.data.message
                    } else {
                        register_error_message.innerText = "Something went wrong"
                    }
                    register_error_message.style.color = "#FF2323"
                })
            }
        }
    }

}