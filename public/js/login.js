/**
 * Creates JSON String from FormData
 * 
 * @param {HTMLElement} formObj Form Element
 * @returns {String} JSON String
 */
function formToJSON(formObj) {
    var obj = {};
    var elements = formObj.querySelectorAll("input, select, textarea");
    for (var i = 0; i < elements.length; ++i) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;
        obj[name] = value;
    }

    return JSON.stringify(obj);
}

//------------------------------------------------------------------
var url = new URL(window.location.href)
var callbackUrl = url.searchParams.get('callbackUrl') || '/events'
console.log(callbackUrl);
//------------------------------------------------------------------

//------------------------------------------------------------------
// Creating reference for login-form element 
var login_form = document.getElementById('login-form')
var login_button = document.getElementById('login-button')
var login_spinner = document.getElementById('login-spinner')
var login_error_message = document.getElementById('login-error-message')
// Attaching submit eventlistener to login-form
login_form.addEventListener("submit", loginCallback, false)

function loginCallback(e) {
    e.preventDefault()
    login_error_message.style.display = "none"
    login_button.style.display = "none"
    login_spinner.style.display = "inline-block"
    var body = formToJSON(this)
    var config = {
        headers: { 'Content-Type': 'application/json' },
    };

    axios.post('/login', body, config)
        .then(function (response) {
            console.log(response);
            window.localStorage.setItem("user", JSON.stringify(response.data))
            window.location.href = callbackUrl
        })
        .catch(function (err) {
            console.log(err);
            if (err.response) {
                login_error_message.innerText = err.response.data.message
            } else {
                login_error_message.innerText = "Something went wrong"
            }
            login_button.style.display = "inline-block"
            login_error_message.style.display = "block"
            login_spinner.style.display = "none"
        })
}
//------------------------------------------------------------------


//------------------------------------------------------------------
// Creating reference for signup-form element
var signup_form = document.getElementById('signup-form')
// Attaching submit eventlistener to signup-form
signup_form.addEventListener("submit", signupCallback, false)
var signup_button = document.getElementById('signup-button')
var signup_spinner = document.getElementById('signup-spinner')
var signup_error_message = document.getElementById('signup-error-message')

function signupCallback(e) {
    e.preventDefault()
    var body = formToJSON(this)
    var config = {
        headers: { 'Content-Type': 'application/json' },
    };

    signup_error_message.style.display = "none"
    signup_button.style.display = "none"
    signup_spinner.style.display = "inline-block"

    axios.post('/signup', body, config)
        .then(function (response) {
            console.log(response);
            window.localStorage.setItem("user", JSON.stringify(response.data))
            window.location.href = callbackUrl
        })
        .catch(function (err) {
            console.log(err);
            if (err.response) {
                signup_error_message.innerText = err.response.data.message
            } else {
                signup_error_message.innerText = "Something went wrong"
            }
            signup_error_message.style.display = "block"
            signup_button.style.display = "inline-block"
            signup_spinner.style.display = "none"
        })
}
//------------------------------------------------------------------