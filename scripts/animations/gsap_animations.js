gsap.registerPlugin(ScrollTrigger)

gsap.from('.call__button', {
    duration: 2,
    delay: 1,
    opacity: 0
})

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
    opacity: 0,
    x: -200,
})

gsap.from('.media', {
    delay: .2,
    opacity: 0,
    duration: 5,
})

const tlInnerIntro = gsap.timeline()

tlInnerIntro.from('.footer-line', {
    duration: 2,
    delay:.2,
    opacity: 0,
})
.from('li', {
    duration: 1,
    y: -50,
    stagger: .15,
})
.from('.container__main-text', {
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

gsap.to('.portfolio .container__title', {
    scrollTrigger: {
        trigger: '.capabilities',
        start:'5% top',
        scrub: true,
    },
    yPercent: -50,
})

gsap.from('.work__item', {
    scrollTrigger: {
        trigger: '.portfolio .container__title',
        start: 'top 40%',
    },
    stagger: .1,
    duration: .1,
    opacity: 0,
    scale: 0,
})

gsap.to('.testimonial .container__title', {
    scrollTrigger: {
        trigger: '.testimonial',
        start:'top 40%',
        scrub: true,
    },
    yPercent: -150,
})

gsap.from('.container__slider', {
    scrollTrigger: {
        trigger: '.testimonial',
        start: '-40% top',
    },
    opacity: 0,
    scale: 0,
    skewX: 30,
    skewY: 30,
    duration: 1,
})

gsap.from('.pagination__dot', {
    scrollTrigger: {
        trigger: '.testimonial',
        start: 'top 20%',
    },
    yPercent: 300,
    opacity: 0,
    stagger: .2,
    scrub: true,
})

gsap.from('.container__form', {
    scrollTrigger: {
        trigger: '.container__form',
        toggleActions: 'restart',
    },
    delay: .5,
    scale: 0,
    opacity: 0,
})

gsap.from('.footer__row a, .footer__nav, .footer__socials', {
    scrollTrigger: {       
        trigger: '.footer__row',
        toggleActions: 'restart'
    },
    delay: .5,
    opacity: 0,
    stagger: .1,
    yPercent:100,
})

gsap.from('.burger-menu__item', {
    xPercent: 200, 
    stagger: .3,
    duration: .1,
})