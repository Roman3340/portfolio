$(document).ready(function() {
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1168,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 735,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'hidden',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'hidden',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    const mobileMenu = $('.mobileMenu');

    $('.burger').on("click", function() {
        mobileMenu.toggleClass('active');
        });

    $('.mobileMenu a').on("click", function() {
        mobileMenu.removeClass('active');
    });

    $('.footerRight span').text((new Date()).getFullYear());

    let resizeTimeout;

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 569 && mobileMenu.hasClass('active')) {
                mobileMenu.removeClass('active');
            }
            console.log(`Новые размеры: ${window.innerWidth}x${window.innerHeight}`);
        }, 100);
    });


});


