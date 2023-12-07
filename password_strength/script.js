var pass = document.getElementById("password");
var msg = document.getElementById("massage");
var str = document.getElementById("strenght");

pass.addEventListener('input',() => {
    if(pass.value.length > 0){
        msg.style.display = "block";
        if(pass.value.length<4){
            str.innerHTML="week";
            msg.style.color="#ff5925"
            pass.style.borderColor="#ff5925"
        }
        if(pass.value.length>=4 && pass.value.length<8){
            str.innerHTML="medium";
            msg.style.color="yellow"
            pass.style.borderColor="yellow"
        }
        if(pass.value.length>=8){
            str.innerHTML="strong";
            msg.style.color="green"
            pass.style.borderColor="green"
        }
    }
    else{
        msg.style.display = "none";
    }
})