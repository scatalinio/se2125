
function $(selector) {
    return document.querySelector(selector)
}

function $$(selector) {
    return document.querySelectorAll(selector)
}

function cookies(name, value) {
    document.cookie = name + "=" + value;
}

window.onload = () => {
    //$("#nav").innerHTML=await (await fetch('/pages/nav.html')).text();
    fetch('/pages/nav.html').then(res => 
    {
        return res.text();
    }).then(res => $("#nav").innerHTML = res)
}