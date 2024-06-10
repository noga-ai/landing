document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true
    });

    new Typed('#section1-text', {
        strings: ["Welcome to our startup.", "We innovate, create, and inspire."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    new Typed('#section2-text', {
        strings: ["Explore our solutions.", "Join us in our journey."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    // Add similar blocks for additional sections
});
