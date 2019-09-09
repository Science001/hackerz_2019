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

// Creating reference for signup-form element
var signup_form = document.getElementById('signup-form')
// Attaching submit eventlistener to signup-form
signup_form.addEventListener("submit", signupCallback, false)
var signup_button = document.getElementById('signup-button')
var loader = document.getElementById('loader')
var signup_error_message = document.getElementById('signup-error-message')
var signup_success_message = document.getElementById('signup-success-message')

function signupCallback(e) {
    e.preventDefault()
    var body = formToJSON(this)
    var config = {
        headers: { 'Content-Type': 'application/json' },
    };

    signup_error_message.style.display = "none"
    signup_button.style.display = "none"
    loader.style.display = "inline-block"

    axios.post('/admin/ons/pot', body, config)
        .then(function (response) {
            signup_success_message.style.display = "inline-block"
            loader.style.display = "none"
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
            loader.style.display = "none"
        })
}

// ---------------------------------------------------------------------------------------------

