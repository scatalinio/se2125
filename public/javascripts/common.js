
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
      var value = cookies[i].split('=')[1].toLowerCase();
      if (name === input) {
        return value;
      } else if (value === input) {
        return name;
      }
    }
    return "";
  };

window.onload = () => {
    //$("#nav").innerHTML=await (await fetch('/pages/nav.html')).text();
    fetch('/pages/nav.html').then(res => 
    {
        return res.text();
    }).then(res => $("#nav").innerHTML = res)
}