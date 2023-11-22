
let menuBtn = document.querySelector("#menuBtn");
let menuBox = document.querySelector(".nav_menu ul");

menuBtn.addEventListener("click", function () {
  menuBox.classList.toggle("active");
})