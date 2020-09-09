$(document).ready(() => {
    $(`input[name=phone]`).inputmask(`+7 (999) 999-99-99`)
    const firstScreenSlider = $(`.first-screen`).owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
    })
    firstScreenSlider.on(`changed.owl.carousel`, function (property) {
        const current = property.item.index - 1
        const count = property.item.count
        console.log(current, count)
    })
})
