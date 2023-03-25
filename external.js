// JavaScript source code

/*-----------about-----------*/

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/*---------sidemenu------*/

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0"
}
function closemenu() {
    sidemenu.style.right = "-200px"
}


/*--------google sheet-----------*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbyZu9wxclr94YNQOrWakT-Dyu4yGmryZ0pTJEa1KSSjacOEU1_1oZYexI1UV_lFZKOW/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
