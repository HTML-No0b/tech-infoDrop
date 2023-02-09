async function loginformhandler(event){
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()

    if (username && password) {
        const response = await fetch('/controllers/api/userRoutes.js/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            })
        })
        if (response.ok){
            document.location.replace('/dashboard')
        }
        }

    }

