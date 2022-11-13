// create spin fa-gear
let overlay = document.querySelector('.overlay');
let btnSpin = document.querySelector('.toggle-setting .fa-gear');
document.querySelector(".toggle-setting .fa-gear").onclick = function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
};
btnSpin.addEventListener('click', ()=>{
    overlay.style.display = "block";
});
// end

