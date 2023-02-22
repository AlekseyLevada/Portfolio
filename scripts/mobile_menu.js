var burgerMenu = $('.burger-menu')
var mobileMenu = $('.mobile-menu')
var headerClose = $('.mobile-menu__header-close')
var body = $('body')

burgerMenu.click(function(){
    mobileMenu.css({
        transition:'.7s',
        transform:'translateX(0%)',
    })
})

headerClose.click(function(){
    mobileMenu.css({
        transition:'.7s',
        transform:'translateX(105%)',
    })
})