document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("nav-menu-active");
    });

    // Optional: close the menu if you click outside of it
    document.addEventListener("click", function (e) {
        if (!navMenu.contains(e.target) && e.target !== navToggle && navMenu.classList.contains("nav-menu-active")) {
            navMenu.classList.remove("nav-menu-active");
        }
    });

    // Optional: auto-close on resize to desktop
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navMenu.classList.remove("nav-menu-active");
        }
    });

    function revealTimeline() {
        const timelineItems = document.querySelectorAll(".timeline-item");
        const triggerBottom = window.innerHeight * 0.8;

        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealTimeline);
    revealTimeline(); // Run on load in case some items are already in view
});
