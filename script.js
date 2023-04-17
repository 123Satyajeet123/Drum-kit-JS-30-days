function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);
  
    if (!audio) return;
    audio.currentTime = 0;
    audio.play(); //directly doing in will only play sometimes and sometimes not.
    key.classList.add("playing");
}
function transitionRemove(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }


// To add hover effect while pressing button

const keys = this.document.querySelectorAll(".key");
window.addEventListener("keydown",playSound);
keys.forEach((key) => {
  key.addEventListener("transitionend", transitionRemove);
});
