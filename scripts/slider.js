rightButton.click( () => {
    currentSlide = currentSlide + 1
    
    if (currentSlide <= sliderItem.length) {
        sliderTrack.css({
            transition: '.3s',
            marginLeft: '-=' + sliderItem.width() + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(800)
    }
    else {
        sliderTrack.css({
            transition: '0.3s',
            marginLeft: '+=' + sliderItem.width() * 2 + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(800)
        currentSlide = 1
    }
    $('.slider__pagination .pagination__dot').removeClass('pagination__dot-active')
    $(`.slider__pagination .pagination__dot:nth-child(${currentSlide})`).addClass('pagination__dot-active')
})

leftButton.click(function () {
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
            marginLeft:'-='+ sliderItem.width()*2 + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(800)
        currentSlide = 3
    }
    $('.slider__pagination .pagination__dot').removeClass('pagination__dot-active')
    $(`.slider__pagination .pagination__dot:nth-child(${currentSlide})`).addClass('pagination__dot-active')
})