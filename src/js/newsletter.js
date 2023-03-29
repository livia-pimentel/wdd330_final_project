const newsletter = document.querySelector("#newsletter")
const formNewsletter = document.forms[0]


formNewsletter.addEventListener("submit", function(e){
    e.preventDefault();
    newsletter.innerHTML = `Thanks for registering!`

    newsletter.getElementsByClassName.display = "block"
})

