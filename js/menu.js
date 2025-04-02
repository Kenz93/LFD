document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menuIcon");
  const menu = document.querySelector(".menu");

  menuIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      menu.classList.toggle("active");
      menuIcon.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
      if (!menuIcon.contains(event.target) && !menu.contains(event.target)) {
          menu.classList.remove("active");
          menuIcon.classList.remove("active");
      }
  });
});
