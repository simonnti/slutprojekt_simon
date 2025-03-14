document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("nav-menu-active");
    });

    // Ensure the menu closes if window is resized back to desktop size
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navMenu.classList.remove("nav-menu-active");
        }
    });
});
