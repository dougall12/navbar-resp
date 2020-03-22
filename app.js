// Top Nav Responsive

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

// Tab Functionality

// Click and toggle

let tabList = document.querySelectorAll(".vertical-tab");
let sections = document.querySelectorAll(".cards");
console.log(sections);
let buttons = document.querySelector("ul.tabs");

buttons.addEventListener("click", () => {
  let tabClicked = event.target;

  //Check target is list item
  if (tabClicked.nodeName === "LI") {
    //Loop the tabs and toggle active

    tabList.forEach(tab => {
      if (tab.classList.contains("active") == true) {
        tab.classList.toggle("active");
        tabClicked.classList.toggle("active");
      }
    });

    //Update Active Cards

    sections.forEach(card => {
      if (card.classList.contains("active") == true) {
        card.classList.toggle("active");
      }
    });
    let activePanelId = tabClicked.getAttribute("href");
    let activeCard = document.querySelector(activePanelId);
    activeCard.classList.toggle("active");
  }
});
