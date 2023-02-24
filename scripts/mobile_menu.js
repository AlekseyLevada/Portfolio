var burgerMenu = $('.burger-menu')
var mobileMenu = $('.mobile-menu')
var mobileMenulink = $('.mobile-menu a')
var headerClose = $('.mobile-menu__header-close')
var body = $('body')

burgerMenu.click( () => {
    mobileMenu.css({
        transition:'.2s',
        transform:'translateX(0%)',
    })
})

headerClose.click( () => {
    mobileMenu.css({
        transition:'.2s',
        transform:'translateX(105%)',
    })
})

mobileMenulink.click( () => {
    setTimeout(()=> {
        headerClose.click()  
    },)
    
})