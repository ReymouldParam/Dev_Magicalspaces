let getIn = document.getElementById("getInTouch");
let getArrow = document.getElementById("getArrow");
getIn.addEventListener("mouseenter", () => {
    getArrow.style.visibility = "visible";
})
getIn.addEventListener("mouseleave", () => {
    getArrow.style.visibility = "hidden";
})
let bar = document.getElementById("bar");
let cross = document.getElementById("cross");
let bar_options = document.getElementById("bar_options");
bar.addEventListener("click", () => {
    bar_options.style.visibility = "visible";
})
cross.addEventListener("click", () => {
    bar_options.style.visibility = "hidden";
});

$('.section1-heading').slick({
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    arrows: false,
    dots: true,
    centerPadding:20,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    css: 'ease-in-out',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});
$('.ourService-aside-slider1').slick({
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    arrows: false,
    dots: false,
    fade: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
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
    autoplaySpeed: 2000,
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
$('.ourproject-section-slider-block2').slick({
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    arrows: true,
    dots: true,
    fade: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: "<button class='slick_btn next_btn'><i class='fa-solid fa-chevron-right'></i></button>",
    prevArrow: "<button class='slick_btn prev_btn'><i class='fa-solid fa-chevron-left'></i></button>",
    // asNavFor: '.ourproject-slider1',
    css: 'ease-in-out',
    responsive: [
        {
            breakpoint: 500,
            settings: {
                // centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false
            }
        }
    ]
});

$('#test-aside2-caresel').slick({
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    arrows: true,
    dots: true,
    autoplaySpeed: 5000,
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
    autoplaySpeed: 1000,
    responsive: [
        {
            // breakpoint: 768,
            // settings: {
            //     arrows: false,
            //     centerMode: true,
            //     centerPadding: '0px',
            //     slidesToShow: 5
            // }
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