let password= document.getElementById("password");
let eye = document.getElementById("eyeicon");

eye.onclick = function (){
    if(password.type=="password"){
        password.type="text";
        eye.src="openeye.png";

    }
    else{
        password.type = "password";  
        eye.src="closedeye.png";
    }
}