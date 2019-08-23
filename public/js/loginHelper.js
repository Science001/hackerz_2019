var login_btn = document.getElementById('login-btn')
var logout_btn = document.getElementById('logout-btn')

if (!window.localStorage.user) {
    login_btn.style.display = "block"
    logout_btn.style.display = "none"
    login_btn.addEventListener("click", function (e) {
        window.location.href = "/login?callbackUrl=" + window.location.pathname
    }, false)
} else {
    var user = JSON.parse(window.localStorage.user)
    login_btn.style.display = "none"
    logout_btn.addEventListener("click", function (e) {
        window.localStorage.clear()
        window.location.reload()
    }, false)
    logout_btn.style.display = "block"
}