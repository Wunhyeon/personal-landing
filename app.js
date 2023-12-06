const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuList = menu.querySelectorAll("a");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
  burger.classList.toggle("burger-active");
});

menuList.forEach((el) => {
  el.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
    burger.classList.toggle("burger-active");
  });
});
