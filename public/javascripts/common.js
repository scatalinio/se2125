
function $(selector) {
    return document.querySelector(selector)
}

function $$(selector) {
    return document.querySelectorAll(selector)
}

function cookies(name, value) {
    document.cookie = name + "=" + value;
}

function getCookie(input) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var name = cookies[i].split('=')[0].toLowerCase();
      var value = cookies[i].split('=')[1];
      if (name === input) {
        return value;
      } else if (value === input) {
        return name;
      }
    }
    return "";
  };
var deleteCookie = function(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

window.addEventListener("load", () => {
    //$("#nav").innerHTML=await (await fetch('/pages/nav.html')).text();
    fetch('/pages/nav.html').then(res => 
    {
        return res.text();
    }).then(res => {
      $("#nav").innerHTML = res
    
    
      const loginBtn = $("#user-login")
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
          // show logout button
          loginBtn.innerHTML = "Logout"
          loginBtn.onclick = () => {
            deleteCookie("token")
          }
      }).catch(error => {
          // show login
          loginBtn.innerHTML = "Login"
          loginBtn.href = "/pages/login.html"
      })
    })

})


