document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburgerIcon");
    const hamburgerMenu = document.querySelector(".hamburgerMenu");

    hamburgerIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah klik pada icon menutup menu
        hamburgerMenu.classList.toggle("active");
        hamburgerIcon.classList.toggle("active");
    });

    // Menutup menu saat klik di luar
    document.addEventListener("click", function (event) {
        if (!hamburgerIcon.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            hamburgerMenu.classList.remove("active");
            hamburgerIcon.classList.remove("active");
        }
    });
});
