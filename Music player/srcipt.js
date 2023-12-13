let progress=document.getElementById("progress")
let song=document.getElementById("song")
let ctrlIcon=document.getElementById("ctrlIcon")
let songimg = document.getElementById("songimg")
let songid = document.getElementById("songid")

song.onloadedmetadata=function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause()
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
function Nextplay(){
    songimg.src="media/2.jpg";
    song.src="media/Chaiyya Chaiyya - Deep Version - _Slowed_Reverb_ - Sukhwinder Singh & Sapna - Vanar Evolved - LoFi ( 160kbps ).mp3";
    songid.type="audio/mpeg";

}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime
    },500);
}
progress.onchange=function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}