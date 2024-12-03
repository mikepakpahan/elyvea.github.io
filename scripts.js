// Fungsi untuk dropdown menu
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");
const menuItems = document.querySelectorAll(".dropdown-menu li a");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtn.classList.toggle("rotate", isOpen);
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    dropDownMenu.classList.remove("open");
  });
});
