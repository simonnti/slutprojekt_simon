document.addEventListener("DOMContentLoaded", function () {
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
