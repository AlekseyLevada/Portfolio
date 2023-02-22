$('.call__button').click(function () {
    $('.popup-overlay').addClass('active')
})

$('.popup__close').click(function () {
    $('.popup-overlay').removeClass('active')
})


// Slider settinngs
var currentSlide = 1
var rightButton = $('.slider__item_arrow-right')
var leftButton = $('.slider__item_arrow-left')
var sliderTrack = $('.slider__track')
var sliderItem = $('.slider__item_content')