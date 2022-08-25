$(document).on('ready', function() {

    var o = $(".princial-banner");
    $(document).ready(function() {
        o.slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            customPaging: function(slider, i) {
                var thumb = jQuery(slider.$slides[i]).data();
                return '<a>0' + (i + 1) + '</a>';
            },
            cssEase: 'linear'
        }), o.slickAnimation()
    });


    $('.carousel-cases').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrow: true,
        infinite: true,
        responsive: [{
            breakpoint: 1030,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });

    $('.carousel-parceiros').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrow: true,
        infinite: true,
        responsive: [{
            breakpoint: 1030,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });

});

$(document).ready(function() {

    $('.nav li a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 100
        }, 800);
    });

    $(".redes-sociais-topo ul li a").hover(function() {
        $(".redes-sociais-topo").toggleClass("ativo");
    });

    $(".navbar-nav li a").click(function() {
        $(".navbar-collapse.collapse").removeClass("in");
    });

    AOS.init({
        disable: function() {
            var maxWidth = 767;
            return window.innerWidth < maxWidth;
        }
    });

    document.addEventListener("mousemove", e => {
        AOS.init();
        AOS.refresh();
    });

    $(document).ready(function() {
        $('#lightgallery').lightGallery();
    });

});

$(document).on("scroll", function() {
    if ($(document).scrollTop() > 105) { //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
        $(".navbar").removeClass("large").addClass("small"); //TROCA P CLASSE MENOR
    } else {
        $(".navbar").removeClass("small").addClass("large"); //VOLTA P MENU GRANDE ORIGINAL
    }
});