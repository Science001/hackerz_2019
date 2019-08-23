axios.get('/whoami')
    .then(function (res) {
        if (!res.data) {
            localStorage.clear()
        } else {
            localStorage.setItem('user', JSON.stringify(res.data))
        }
    })