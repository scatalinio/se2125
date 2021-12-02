
window.onload = () => {
    // poll validate session
    

    let validateSession = () => {
        fetch("/users-secured/getUser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + getCookie("token")
            }
        }).then(res => {
            if (res.ok) {
              return res;
            } else if(res.status == 401) {
                throw new Error('Access Denied');       
            } else {
                throw new Error('Access Denied');            
            }
    
        }).then(res => {
            setTimeout(validateSession, 10000);
        }).catch(error => {
            console.error(error);
            window.location.href = "/pages/login.html"
        })
    }
    validateSession();
}