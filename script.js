document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: false,
        fitToSection: true,
        fitToSectionDelay: 300,
        sectionSelector: '.section',
        paddingTop: '0px',
        paddingBottom: '0px',
    });

    new Typed('#section1-text', {
        strings: ["At Noga, we specialize in creating AI-powered data scientists.",
            "Our mission is to do it so well so that you can reach for loftier goals, so much faster. "],
        typeSpeed: 20,
        backSpeed: 20,
        showCursor: false,
        loop: true
    });

    new Typed('#section2-text', {
        strings: ["Noga is in early access as we expand our capacity. \n To leverage Noga, join our waitlist or contact us at info@getnoga.com"],
        typeSpeed: 30,
        backSpeed: 10,
        showCursor: false,
        backdelay: 1000,
        loop: true,
        loopCount: 5,
    });

    new Typed('#section3-text', {
        strings: ["Every company is different \n which is why Noga is building integrations to bridge domain expertise \nand learn over time based on internal company assets and external web sources.\nBy doing so, we ensure that your models are informed by the most relevant \nand comprehensive data available. \nThis fusion of knowledge enhances the accuracy and reliability of your insights."],
        typeSpeed: 30,
        backSpeed: 10,
        showCursor: false,
        backdelay: 1000,
        loop: true,
        loopCount: 7,
    });

    new Typed('#section4-text', {
        strings: ["We understand the critical importance of data sensitivity and security. \nThat’s why Noga is powered by our own proprietary fine-tuned language model behind the hood\n, ensuring that no data is sent to third parties."],
        typeSpeed: 30,
        backSpeed: 10,
        showCursor: false,
        backdelay: 1000,
        loop: true,
        loopCount: 9,
    });

    new Typed('#section5-text', {
        strings: ["At Noga, we believe that the key to successful AI implementation lies in maintaining a human-in-the-loop approach. \nBy keeping data teams involved in the process, \nwe ensure that AI solutions are not only technically sound but also ethically aligned and contextually appropriate.\n This collaborative model leverages the best of both human intuition and machine efficiency."],
        typeSpeed: 30,
        backSpeed: 10,
        showCursor: false,
        backdelay: 1000,
        loop: true,
        loopCount: 11,
    });
});
