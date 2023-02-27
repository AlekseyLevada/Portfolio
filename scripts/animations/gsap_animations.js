gsap.registerPlugin(ScrollTrigger)

gsap.from('.call__button', {duration: 3, delay: 3, opacity: 0})

const tlInnerSidebar = gsap.timeline()
tlInnerSidebar.from('.container__sidebar', {
    duration: 2,
    delay:.2,
    opacity: 0,
})
.from('.sidebar__logo', {
    duration: .5,
    x: -200,
    opacity: 0,
})
.from('.container__cascade', {
    duration: 1,
    x: -200,
    opacity: 0,
})
.from('.socials', {
    duration: .7,
    opacity: 0,
    x: -200,
    ease: "bounce.out",
})

const tlInnerIntro = gsap.timeline()
tlInnerIntro.from('.footer-line', {
    duration: 2,
    delay:.2,
    opacity: 0,
})
.from('.intro__navbar', {
    duration: 1,
    y: -50,
})
.from('.container__main-text', {
    duration: 1,
    yPercent: 50,
    opacity: 0,
})


gsap.to('.container__cascade', {
    scrollTrigger: {
        trigger: '.intro',
        start: '10% top',
        scrub: true,
    },
    y: 100,
    scale: .8,
})
gsap.to('.container__main-text', {
    scrollTrigger: {
        trigger: '.intro',
        start: '10% top',
        scrub: true,
    },
    y: 200,
    scale: .8,
})
