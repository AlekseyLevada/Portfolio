gsap.registerPlugin(ScrollTrigger)

gsap.from('.call__button', {duration: 3, delay: 3, opacity: 0})

const tlInnerSidebar = gsap.timeline()
tlInnerSidebar.from('.container__sidebar', {
    duration: 1,
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
gsap.from('.capabilities__container', {
    scrollTrigger: {
        trigger: '.capabilities',
        start: '-40% center',
        end: '+=400px',
        scrub: true,
    },
    scale: 0,
    transformOrigin: 'center center',
})
gsap.from('.portfolio .container__title', {
    scrollTrigger: {
        trigger: '.capabilities',
        start:'5% top',
        scrub: true,
    },
    duration:.2,
    yPercent: 70,
})
gsap.from('.testimonial .container__title', {
    scrollTrigger: {
        trigger: '.testimonial',
        start:'top bottom',
        scrub: true,
    },
    yPercent: 50,
})
