let menu = document.querySelector("#menu-icon");
let ul = document.querySelector(".ul");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  ul.classList.toggle("open");
};
