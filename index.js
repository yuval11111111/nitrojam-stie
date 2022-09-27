const readFile = require(`fs`)
const writeFile = require(`fs`)
const menu = document.querySelector('#mobile-menu');
const menu_links = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menu_links.classList.toggle('active');
})

let username = document.getElementsByClassName("username")[0].value;
if (username = `test`) {
    document.getElementById('test2').innerHTML = `tezst`
}

function login() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    if (username == `YuvalTheCookie` && password == `amaz1111` || username == `NitroJam` && password == `Nitroiscool891` || username == `Oncho` && password == `Ilovebigbootty` || username == `michael` && password == `Sonic.22!` || username == `BPlay` && password == `BPay7` || username == `Scourgko Hedgefox` &&  password == `scourgkosuper11`) {
        window.location.href = `./index_staff.html`
        document.getElementById('password').value = ''
        document.getElementById('username').value = ``
        document.getElementById('invalid').style.display = 'none'
        document.getElementById('welcome').innerHTML = `welcome ${username}`
    } else {
        document.getElementById('password').value = ''
        document.getElementById('username').value = ``
        document.getElementById('invalid').style.display = 'block'
    }
}

function login_hebrew() {
    var username = document.getElementById('username_hebrew').value
    var password = document.getElementById('password_hebrew').value
    if (username == `YuvalTheCookie` && password == `amaz1111` || username == `NitroJam` && password == `Nitroiscool891` || username == `Oncho` && password == `Ilovebigbootty` || username == `michael` && password == `Sonic.22!` || username == `BPlay` && password == `BPay7` || username == `Scourgko Hedgefox` &&  password == `scourgkosuper11`) {
        window.location.href = `./index_staff_hebrew.html`
        document.getElementById('password_hebrew').value = ''
        document.getElementById('username_hebrew').value = ``
        document.getElementById('invalid_hebrew').style.display = 'none'
        document.getElementById('welcome').innerHTML = `welcome ${username}`
    } else {
        document.getElementById('password_hebrew').value = ''
        document.getElementById('username_hebrew').value = ``
        document.getElementById('invalid_hebrew').style.display = 'block'
    }
}