const notecontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

function showNotes(){
    notecontainer.innerHTML=localStorage.getItem("notes");
}

function updateStorage(){
    localStorage.setItem("notes",notecontainer.innerHTML);
}

createbtn.addEventListener('click',()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="trash-can-solid.svg";
    notecontainer.appendChild(inputBox).appendChild(img);
})

notecontainer.addEventListener('click',function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==='P'){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener('keydown',event =>{
    if(event.key==='Enter'){
        document.execCommand("insterLineBreak");
        event.preventDefault();
    }
})