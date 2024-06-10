document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true
    });

    new Typed('#section1-text', {
        strings: ["At Noga, we specialize in creating AI-powered data scientists. Our mission is to do it so well so that you can reach for loftier goals, so much faster."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    new Typed('#section2-text', {
        strings: ["Noga is in early access as we expand our capacity. To leverage Noga, join our waitlist or contact us at info@getnoga.com"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    new Typed('#section3-text', {
        strings: ["Every company is different, which is why Noga is building integrations to bridge domain expertise and learn over time based on internal company assets and external web sources. By doing so, we ensure that your models are informed by the most relevant and comprehensive data available. This fusion of knowledge enhances the accuracy and reliability of your insights."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    new Typed('#section4-text', {
        strings: ["We understand the critical importance of data sensitivity and security. That’s why Noga is powered by our own proprietary fine-tuned language model behind the hood, ensuring that no data is sent to third parties."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    new Typed('#section5-text', {
        strings: ["At Noga, we believe that the key to successful AI implementation lies in maintaining a human-in-the-loop approach. By keeping data teams involved in the process, we ensure that AI solutions are not only technically sound but also ethically aligned and contextually appropriate. This collaborative model leverages the best of both human intuition and machine efficiency."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    // Add similar blocks for additional sections
});
