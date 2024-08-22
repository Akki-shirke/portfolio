var typed = new Typed('#element', {
    strings: ['Web Designer', ' Web Developer.'],
    typeSpeed: 50,
    loop: true
});


gsap.to("#box h2", {
    opacity: 0,
    x: 500,
    scrollTrigger: {
        triggeer: "#box h2",
        scroller: "body",
        start: "top -40%",
        end: "top 0%",
        scrub: 1,

    }
})
gsap.to("#intro .left", {
    opacity: 0,
    x: -100,
    scrollTrigger: {
        triggeer: "#box h2",
        scroller: "body",
        start: "top -60%",
        end: "top 10%",
        scrub: 1,
        pin: true
    }
})

gsap.to("#intro .box-main", {
    x: 500,
    opacity: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        triggeer: "#box .box-main",
        scroller: "body",
        start: "top -10%",
        end: "top -100%",
        scrub: 1,
        pin: true
    }
})




gsap.to("#eduction .container", {
    y: -100,
    opacity: 2,
    stagger: 0.1,
    scrollTrigger: {
        triggeer: "#eduction .container",
        scroller: "body",
        start: "top 0%",
        scrub: 1,
    }
})

gsap.to("#eduction .container", {
    y: -100,
    opacity: 2,
    stagger: 0.1,
    scrollTrigger: {
        triggeer: "#eduction .container",
        scroller: "body",
        start: "top 0%",
        scrub: 1,
    }
})
gsap.to("#design .box-1", {
    y: -100,
    opacity: 2,
    scrollTrigger: {
        triggeer: "#design .box-1",
        scroller: "body",
        start: "top 50%",
        scrub: 1,
    }
})