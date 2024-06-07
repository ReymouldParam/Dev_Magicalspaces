
let image3 = document.getElementById('ourFormimage');
let header_background = document.getElementById('header_background');
let category3_images = ["./Assets/Images/form image2.png", "./Assets/Images/form image3.png", "./Assets/Images/form image4.png", "./Assets/Images/form image5.png"]
let bgc_images = ["./Assets/Images/bgcphoto2.png", "./Assets/Images/bgcphoto3.png", "./Assets/Images/bgcphoto4.png", "./Images/Headerbackground.png"]
setInterval(function () {
    let random = Math.floor(Math.random() * 3);
    image3.src = category3_images[random];
    header_background.style.backgroundImage = 'url(' + bgc_images[random] + ')';
}, 2000)

let getIn = document.getElementById("getInTouch");
let getArrow = document.getElementById("getArrow");
getIn.addEventListener("mouseenter",()=>{
    getArrow.style.visibility = "visible";
})
getIn.addEventListener("mouseleave",()=>{
    getArrow.style.visibility = "hidden";
})


$('#slider_content').slick({
    centerMode: true,
    // center:true,
    centerPadding: 10,
    slidesToShow: 5,
    Infinity: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1000,
    nextArrow: "<button class='slick_btn next_btn'><i class='fa-solid fa-chevron-right'></i></button>",
    prevArrow: "<button class='slick_btn prev_btn'><i class='fa-solid fa-chevron-left'></i></button>",
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
    fade: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    nextArrow: "<button class='slick_btn next_btn'><i class='fa-solid fa-chevron-right'></i></button>",
    prevArrow: "<button class='slick_btn prev_btn'><i class='fa-solid fa-chevron-left'></i></button>",
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
$('.ourServiceSlider').slick({
    // centerMode: true,
    // center:true,
    centerPadding: 50,
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    fade: true,
    arrows:false,
    cssEase: 'linear',
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
$('#header_slider').slick({
    // centerMode: true,
    // center:true,
    // centerPadding: 10,
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    arrows:false,
    fade: true,
    css:'ease-in-out',
    // dots: true,
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
$('#heading_sliding').slick({
    slidesToShow: 1,
    Infinity: true,
    autoplay: true,
    arrows:false,
    css:'ease-in-out',
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

let about_company = document.getElementsByClassName("majorbody3")[0];
let about_com = document.getElementsByClassName("block")[0];
let about_com1 = document.getElementsByClassName("block")[1];
let about_com2 = document.getElementsByClassName("block")[2];
let about_comimg1 = document.getElementsByClassName("image2")[0];
let about_comimg2 = document.getElementsByClassName("image2")[1];
let about_comimg3 = document.getElementsByClassName("image2")[2];
about_company.addEventListener("mouseenter", () => {
    about_com.classList.add("transform_right1")
    about_com1.classList.add("transform_right1")
    about_com2.classList.add("transform_right1")
    about_comimg1.classList.add("about_Company_slider_images")
    about_comimg2.classList.add("about_Company_slider_images")
    about_comimg3.classList.add("about_Company_slider_images")
});