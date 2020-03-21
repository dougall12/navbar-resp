const open = document.getElementById("openNav");
const close = document.getElementById("closeNav");

function openMenu() {
  document.getElementById("small-nav").style.width = "50%";
  document.getElementById("navbar").style.height = "0";
  open.style.display = "none";
}

function closeMenu() {
  document.getElementById("small-nav").style.width = "0";
  document.getElementById("navbar").style.height = "50px";
  open.style.display = "inline";
}

open.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
