document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const bar = document.querySelector("#bar");
    const barOptions = document.querySelector("#bar_options");
    const cross = document.querySelector("#cross");

    // Toggle menu visibility on bar click (mobile view)
    bar.addEventListener("click", function () {
        barOptions.classList.toggle("active");
        bar.classList.toggle("open");
        cross.classList.toggle("show");
    });

    // Optionally handle the cross icon click to close the menu
    cross.addEventListener("click", function () {
        barOptions.classList.remove("active");
        bar.classList.remove("open");
        cross.classList.remove("show");
    });
});


// *********************************************
$('.ourService-aside-slider1').slick({
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    arrows: false,
    dots: false,
    fade: true,
    pauseOnHover: false,
    autoplaySpeed: 10000,
    asNavFor: '.ourService-aside-slider2',
    css: 'ease-in-out',
    responsive: [
        {
            // breakpoint: 480,
            // settings: {
            //     arrows: false,
            //     centerMode: true,
            //     centerPadding: '40px',
            //     slidesToShow: 1
            // }
        }
    ]
});
$('.ourService-aside-slider2').slick({
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    arrows: true,
    dots: true,
    fade: true,
    asNavFor: '.ourService-aside-slider1',
    nextArrow: "<button class='slick_btn next_btn'><i class='fa-solid fa-chevron-right'></i></button>",
    prevArrow: "<button class='slick_btn prev_btn'><i class='fa-solid fa-chevron-left'></i></button>",
    css: 'ease-in-out',
    responsive: [
        {
            // breakpoint: 500,
            // settings: {
            //     arrows: false,
            //     centerMode: true,
            //     centerPadding: '40px',
            //     slidesToShow: 1
            // }
        }
    ]
});

$('#slider_content').slick({
    centerMode: true,
    // center:true,
    centerPadding: 10,
    slidesToShow: 5,
    infinity: true,
    autoplay: true,
    arrows: false,
    asNavFor: '#our_project_slider_content_caption',
    // dots: true,
    autoplaySpeed: 10000,
    responsive: [
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                // center:true,
                centerPadding: 10
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                // dots: true

            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('#test-aside2-caresel').slick({
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    arrows: true,
    dots: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    nextArrow: "<button class='slick_btn next_btn'><i class='fa-solid fa-chevron-right'></i></button>",
    prevArrow: "<button class='slick_btn prev_btn'><i class='fa-solid fa-chevron-left'></i></button>",
    css: 'ease-in-out',
    responsive: [
        {
            // breakpoint: 480,
            // settings: {
            //     arrows: false,
            //     centerMode: true,
            //     centerPadding: '40px',
            //     slidesToShow: 1
            // }
        }
    ]
});

$('#slider_content').on('afterChange', function () {
    ourProjectCarosels()
});

function ourProjectCarosels() {
    let our_project_slides = document.querySelectorAll(".Mini_slider")
    let array = Array.from(our_project_slides)
    for (var i = 0; i < array.length; i++) {
        if (array[i].classList.contains("slick-current")) {
            array[i - 2].classList.remove("small_slides")
            array[i + 2].classList.remove("small_slides")
            array[i - 1].classList.add("small_slides")
            array[i + 1].classList.add("small_slides")
        }
    }
}

$('#our_project_slider_content_caption').slick({
    nextArrow: "<button class='slick_btn next_btn'><i class='fa-solid fa-chevron-right'></i></button>",
    prevArrow: "<button class='slick_btn prev_btn'><i class='fa-solid fa-chevron-left'></i></button>",

    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    // arrows: false,
    dots: true,
    fade: true,
    // arrows:true,
    asNavFor: '#slider_content',
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 880,
            settings: {
                arrows: false,
                dots: false                
            }
        },
        {
            // breakpoint: 480,
            // settings: {
            //     arrows: false,
            //     centerMode: true,
            //     centerPadding: '40px',
            //     slidesToShow: 1
            // }
        }
    ]
});

let closeButton = document.querySelector('.close');
let home_page_mail = document.querySelector('.mail-success-box');
closeButton.addEventListener('click', () => {
    home_page_mail.style.display = "none";
    $("body").css("overflow", "auto");
});
$('.slider-contact').slick({
    centerMode: true,
    fade: true,
    slidesToShow: 1,
    infinity: true,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 3000,
});