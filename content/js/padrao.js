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
        // centerMode: true,
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
        // centerMode: true,
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