function buttonAnimation(e){
    const key = document.querySelector(`.key[data-key = "${e.key}"]`);
    if(!key) return;
    key.classList.add("playing");
    setTimeout(() => {
        key.classList.remove("playing")
    },70)
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key = "${e.key}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}


window.addEventListener("keydown", (e) =>{
    playSound(e);
    buttonAnimation(e);
})