import $ from "jquery";

$(document).ready(function () {
    const elements = $(".is_animate");
    elements.css("opacity", 0);

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const $target = $(entry.target);
                const animationName = $target.data("animation");
                const delay = $target.data("delay") || 0;

                if (!$target.hasClass(animationName)) {
                    $target.css("animation-delay", delay + "s");
                    $target.addClass(animationName).css("opacity", 1);
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.each(function () {
        observer.observe(this);
    });
});
