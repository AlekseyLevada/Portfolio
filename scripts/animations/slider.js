let currentSlide = 1
let rightButton = $('.slider__item_arrow-right')
let leftButton = $('.slider__item_arrow-left')
let sliderTrack = $('.slider__track')
let sliderItem = $('.slider__item_content')

rightButton.click(() => {
    currentSlide = currentSlide + 1

    if (currentSlide <= sliderItem.length) {
        sliderTrack.css({
            transition: '.3s',
            marginLeft: '-=' + sliderItem.width() + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(300)
    }
    else {
        sliderTrack.css({
            transition: '0.3s',
            marginLeft: '+=' + sliderItem.width() * 2 + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(300)
        currentSlide = 1
    }
    $('.slider__pagination .pagination__dot').removeClass('pagination__dot-active')
    $(`.slider__pagination .pagination__dot:nth-child(${currentSlide})`).addClass('pagination__dot-active')
})

leftButton.click( () => {
    currentSlide = currentSlide - 1

    if (currentSlide >= 1) {
        sliderTrack.css({
            transition: '.3s',
            marginLeft: '+=' + sliderItem.width() + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(800)
    }
    else {
        sliderTrack.css({
            transition: '.3s',
            marginLeft: '-=' + sliderItem.width() * 2 + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(800)
        currentSlide = 3
    }
    $('.slider__pagination .pagination__dot').removeClass('pagination__dot-active')
    $(`.slider__pagination .pagination__dot:nth-child(${currentSlide})`).addClass('pagination__dot-active')
})