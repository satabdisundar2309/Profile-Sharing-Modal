const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
function openModal() {
  modal.style.scale = 1;
  overlay.style.opacity = 1;
  overlay.style.zIndex = 4;
}
function closeModal() {
  modal.style.scale = 0;
  overlay.style.opacity = 0;
  overlay.style.zIndex = -4;
  
}
// overlay.addEventListener("click",(e)=>{
//     e.target.closeModal()
// })
