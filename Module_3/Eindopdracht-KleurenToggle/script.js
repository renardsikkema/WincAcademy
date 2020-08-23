const toggleMenu = function () {
    const menu = document.querySelector(".nav-sidebar");
    menu.classList.toggle("hidden");
};
  
const getElementColorClass = function (element) {
    return element.classList.item(0);
};
  
const setBackgroundColor = function (newColor) {
  const body = document.querySelector("body");
  const currentColor = getElementColorClass(body);
  body.classList.remove(currentColor);
  body.classList.add(newColor);
};
  
const menuItemClickHandler = function (event) {
  this.children[0].checked = true;
  const color = getElementColorClass(event.target);
  setBackgroundColor(color);
  toggleMenu();
};
  
const toggleMenuButton = document.querySelector(".btn-toggle-nav");
toggleMenuButton.addEventListener("click", toggleMenu);
toggleMenuButton.addEventListener("mouseover", toggleMenu);
  
const colorButtons = document.querySelectorAll("li");
colorButtons.forEach(function (colorButton) {
  colorButton.addEventListener("click", menuItemClickHandler);
});
  