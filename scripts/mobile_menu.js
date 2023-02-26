let burgerMenu = $('.burger-menu')
let mobileMenu = $('.mobile-menu')
let mobileMenulink = $('.mobile-menu a')
let headerClose = $('.mobile-menu__header-close')
let body = $('body')

burgerMenu.click( () => mobileMenu.css({transition:'.2s',transform:'translateX(0%)'}))

headerClose.click( () => mobileMenu.css({transition:'.2s',transform:'translateX(105%)',}))

mobileMenulink.click( () => headerClose.click())