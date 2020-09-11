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


    $(`.portfolio`).hover(function () {
        // eslint-disable-next-line no-invalid-this
        const bg = $(this).attr(`data-image`)
        $(`.section_portfolio`).css(`background-image`, `url(${bg})`)
    })
    $(`.material__tab`).click(function () {
        if (!$(this).hasClass(`active`)) {
            const text = $(this).attr(`data-type`)
            const image = $(this).attr(`data-image`)
            const link = $(this).attr(`data-link`)
            $(`.material__image`).attr(`src`, image)
            $(`.material__text`).fadeOut(250)
            setTimeout(function () {
                $(`.material__text[data-text=${text}]`).fadeIn()
            }, 250)
            $(`.material__link a`).attr(`href`, link)
            $(`.material__tab`).removeClass(`active`)
            $(this).addClass(`active`)
        }
    })
    const reviewSlider = $(`.review`).owlCarousel({
        items: 1,
        loop: true,
        dots: false
    })
    reviewSlider.on(`changed.owl.carousel`, function (property) {
        let current = (property.property.value - Math.ceil(property.item.count / 2)) % property.item.count || 0
        if ((current + 1) < 10) {
            current = `0` + (current + 1)
        }
        $(`.review-nav__text_active`).text(current)
    })
    $(`.review-button_prev`).click(function () {
        reviewSlider.trigger(`prev.owl.carousel`)
    })
    $(`.review-button_next`).click(function () {
        reviewSlider.trigger(`next.owl.carousel`)
    })
    $(`.footer-top`).click(function () {
        $(`body,html`).animate({
            scrollTop: 0
        }, 800)
        return false
    })
    $(`.header__burger`).click(function () {
        $(this).toggleClass(`active`)
        if ($(this).hasClass(`active`)) {
            $(`.header__toggle`).text(`Закрыть`)
            $(`.header__menu`).addClass(`header__menu_close`)
            $(`.nav`).slideDown()
            $(`body`).addClass(`hidden`)
        } else {
            $(`.header__toggle`).text(`Меню`)
            $(`.nav`).slideUp()
            $(`.header__menu`).removeClass(`header__menu_close`)
            $(`body`).removeClass(`hidden`)
        }
    })
})
function changeCurrentFirstScreenSlider(current, count) {
    const persent = ((current + 1) / count * 100)
    $(`.first-screen__load span`).css(`width`, persent + `%`)
    if ((current + 1) < 10) {
        current = `0` + (current + 1)
    }
    $(`.first-screen__text_current`).text(current)
}
