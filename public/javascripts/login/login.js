
const loginButton = $("#login-btn");

loginButton.onclick = () => {
    console.log("starting login");
    const username = $("#username").value;
    const password = $("#password").value;
    console.log("usernasme", username);
    console.log("password", password);

    let loginData = {
        username: username,
        password: password
    }

    fetch("/users/login", {
        method: 'POST',
        headers:  {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
    }).then(res => {
        if (res.ok) {
          return res.json();
        } else if(res.status == 401) {
            throw new Error('Access Denied');       
        } else {
            throw new Error('Something went wrong');            
        }

    }).then(res => {
        //1. get token from results
        //2. store token to cookies
        cookies("token", res.token)
        window.location.href = "/pages/user.html"
    }).catch(error => {
        console.log(error);
        $("#login-message").textContent = error
        $("#login-message").classList.remove("d-none")
    })

}