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
$('#header_slider').slick({

    slidesToShow: 1,
    pauseOnHover: false,
    Infinity: true,
    autoplay: true,
    arrows: false,
    fade: true,
    css: 'linear',
    asNavFor: '#heading_sliding',
    // dots: true,
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 500,
            settings: {
                arrows: false
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
$('#heading_sliding').slick({
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    arrows: false,
    dots: true,
    css: 'ease-in-out',
    asNavFor: '#header_slider',
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
$('.ourServiceSlider').slick({
    // centerMode: true,
    // center:true,
    centerPadding: 50,
    slidesToShow: 1,
    Infinity: true,
    // autoplay: true,
    fade: true,
    arrows: false,
    cssEase: 'linear',
    asNavFor: '#ourserviceAside',
    // autoplaySpeed: 1000,
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
$('#ourserviceAside').slick({
    centerMode: true,
    centerPadding: 30,
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    dots: true,
    fade: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    asNavFor: '.ourServiceSlider',
    nextArrow: "<button class='slick_btn next_btn'><i class='fa-solid fa-chevron-right'></i></button>",
    prevArrow: "<button class='slick_btn prev_btn'><i class='fa-solid fa-chevron-left'></i></button>",
    responsive: [
        {
            breakpoint: 500,
            settings: {
                nextArrow: false,
            }
        }
    ]
});
$('#slider_content').slick({
    centerMode: true,
    // center:true,
    centerPadding: 10,
    slidesToShow: 5,
    Infinity: true,
    autoplay: true,
    arrows: false,
    asNavFor: '#our_project_slider_content_caption',
    // dots: true,
    autoplaySpeed: 1000,
    nextArrow: "<button class='slick_btn next_btn'><i class='fa-solid fa-chevron-right'></i></button>",
    prevArrow: "<button class='slick_btn prev_btn'><i class='fa-solid fa-chevron-left'></i></button>",
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
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
$('#our_project_slider_content_caption').slick({
    // centerMode: true,
    // center:true,
    // centerPadding: 10,
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
$('#ourTestimage1').slick({
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    dots: true,
    // centerPadding: '0px',
    nextArrow: "<button class='slick_btn next_btn'><i class='fa-solid fa-chevron-right'></i></button>",
    prevArrow: "<button class='slick_btn prev_btn'><i class='fa-solid fa-chevron-left'></i></button>",
    css: 'ease-in-out',
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
$('#ourFormImages_sliding').slick({
    // centerMode: true,
    // centerPadding: 30,
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    arrows: false,
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
            breakpoint: 480,
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
    // alert("hello")
});

function ourProjectCarosels() {
    let our_project_slides = document.querySelectorAll(".Mini_slider")
    let array = Array.from(our_project_slides)
    console.log(array)
    for (var i = 0; i < array.length; i++) {
        if (array[i].classList.contains("slick-current")) {
            array[i - 2].classList.remove("small_slides")
            array[i + 2].classList.remove("small_slides")
            array[i - 1].classList.add("small_slides")
            array[i + 1].classList.add("small_slides")
        }
    }
}