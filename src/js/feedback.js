const feedbackelement = document.querySelector('#feedback');
const formElement = document.forms[0];

formElement.addEventListener('submit', function(e){
    e.preventDefault();
    feedbackelement.innerHTML = `Hello ${formElement.fname.value} !
    Thank you for you message.
    We will confirm your reservation shortly.`

    feedbackelement.getElementsByClassName.display = "block"
})