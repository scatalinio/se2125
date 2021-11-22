
function $(selector) {
    return document.querySelector(selector)
}

function $$(selector) {
    return document.querySelectorAll(selector)
}

function cookies(name, value) {
    document.cookie = name + "=" + value;
}