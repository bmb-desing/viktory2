$(document).ready(() => {
    $(`input[name=phone]`).inputmask(`+7 (999) 999-99-99`)
    const firstScreenSlider = $(`.first-screen__slider`).owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
    })
    $(`.lazy`).lazy()
    firstScreenSlider.on(`changed.owl.carousel`, function (property) {
        const current = (property.property.value - Math.ceil(property.item.count / 2)) % property.item.count || 0
        const count = property.item.count
        console.log(current)
        changeCurrentFirstScreenSlider(current, count)
    })
    $(`.first-screen__nav_next`).click(function () {
        firstScreenSlider.trigger(`next.owl.carousel`)
    })
    $(`.first-screen__nav_prev`).click(function () {
        firstScreenSlider.trigger(`prev.owl.carousel`)
    })
    $(window).on(`load`, function () {
        $(`.loader`).delay(1000).fadeOut()
    })

    // eslint-disable-next-line no-undef
    Waves.init()
    // eslint-disable-next-line no-undef
    Waves.attach(`.button`, `waves-light`)
})
function changeCurrentFirstScreenSlider(current, count) {
    const persent = ((current + 1) / count * 100)
    $(`.first-screen__load span`).css(`width`, persent + `%`)
    if (current + 1 < 10) {
        current = `0` + (current + 1)
    }
    $(`.first-screen__text_current`).text(current)
}
