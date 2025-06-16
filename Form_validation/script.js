var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var massageError = document.getElementById('massage-error');
var submitError = document.getElementById('submit-error');


function ValidateName(){
    var name=document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML='Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='write full name';
        return false;
    }
    nameError.innerHTML='<i class="fa fa-check-circle"></i>';
    return true;
}

function ValidatePhone(){
    var phone = document.getElementById('phone').value;
    if(phone.length ==0){
        phoneError.innerHTML='Phone no is required';
        return false;
    }
    if(phone.length !==10){
        phoneError.innerHTML='Phone number should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Phone number is required';
        return false;
    }
    phoneError.innerHTML='<i class="fa fa-check-circle"></i>';
}

function ValidateEmail(){
    var email=document.getElementById('email').value;
    
    if (email.length==0) {
        emailError.innerHTML='Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML='Email Invalid';
        return false;
    }
    emailError.innerHTML='<i class="fa fa-check-circle"></i>';
    return true;
}

function Validatemessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;

    if (left>0) {
        massageError.innerHTML =left+'more characters reqired';
        return false;
    }
    massageError.innerHTML='<i class="fa fa-check-circle"></i>';
    return true;
}

function validateFrom(){
    if (!ValidateName() || !ValidatePhone() || !ValidateEmail() || !Validatemessage ()) {
        submitError.style.display = 'block';
        submitError.innerHTML='Please fix error to submit';
        setTimeout(function (){ submitError.style.display='none';}, 3000);
        return false;
    }
} 