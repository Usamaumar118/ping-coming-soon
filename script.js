const email = document.getElementById('email')
const form = document.getElementById('form')
const errorMsg = document.querySelector('.error-msg')




form.addEventListener('submit', (e) => {

    e.preventDefault()

    const emailVal = email.value.trim()

    if(emailVal == '' || emailVal == null ){
        errorMsg.style.display = 'block'
        email.style.borderColor = 'red'
        console.log(emailVal)
        errorMsg.innerHTML = "Email should not be empty"
    } else if(!isEmail(emailVal)){
        errorMsg.style.display = 'block'
        email.style.borderColor = 'red'
        errorMsg.innerHTML = "Please provide a valid email address"
    } else{
        errorMsg.style.display = 'none'
    }




})

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}