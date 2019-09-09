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


// Creating reference for attended-form element
var attended_form = document.getElementById('attended-form')
// Attaching submit eventlistener to attended-form
attended_form.addEventListener("submit", attendedCallback, false)
var attended_button = document.getElementById('attended-button')
var loader = document.getElementById('loader')
var attended_error_message = document.getElementById('attended-error-message')
var attended_success_message = document.getElementById('attended-success-message')

function attendedCallback(e) {
    e.preventDefault()
    var body = formToJSON(this)
    var config = {
        headers: { 'Content-Type': 'application/json' },
    };

    attended_error_message.style.display = "none"
     attended_success_message.style.display = "none"
    attended_button.style.display = "none"
    loader.style.display = "inline-block"

    axios.post('/admin/atten/ded', body, config)
        .then(function (response) {
            document.getElementById('sname').innerHTML = response.data.name;
            document.getElementById('scollege').innerHTML = response.data.college;
            document.getElementById('syear').innerHTML = response.data.year;
            document.getElementById('sdepartment').innerHTML = response.data.department;
            document.getElementById('smobile').innerHTML = response.data.mobile;
            attended_success_message.style.display = "block"
            attended_button.style.display = "inline-block"
            loader.style.display = "none"
        })
        .catch(function (err) {
            console.log(err);
            if (err.response) {
                attended_error_message.innerText = err.response.data.message
            } else {
                attended_error_message.innerText = "Something went wrong"
            }
            attended_error_message.style.display = "block"
            attended_button.style.display = "inline-block"
            loader.style.display = "none"
        })
}