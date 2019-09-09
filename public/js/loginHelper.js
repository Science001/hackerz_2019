var login_btn = document.getElementById('login-btn')
var logout_btn = document.getElementById('logout-btn')

if (!window.localStorage.user) {
    login_btn.style.display = "block"
    logout_btn.style.display = "none"
    login_btn.addEventListener("click", function (e) {
        e.preventDefault()
        window.location.href = "/login?callbackUrl=" + window.location.pathname
    }, false)
} else {
    var user = JSON.parse(window.localStorage.user)
    login_btn.style.display = "none"
    if (window.innerWidth < 1024) {
        logout_btn.innerText = user.name + ' - Logout'
    } else {
        logout_btn.innerText = user.name
    }
    logout_btn.addEventListener('mouseenter', function (e) {
        this.innerText = "Logout"
    }, false)
    logout_btn.addEventListener('mouseleave', function (e) {
        this.innerText = user.name
    }, false)
    logout_btn.addEventListener("click", function (e) {
        axios.post('/logout')
            .then(function (res) {
                window.localStorage.clear()
                window.location.reload()
            })
            .catch(function (err) {
                console.log(err);
            })
    }, false)
    logout_btn.style.display = "block"
}