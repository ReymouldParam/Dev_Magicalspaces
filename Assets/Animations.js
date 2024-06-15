
const observeSlideUp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('defaultPosition');
        } else {
            entry.target.classList.remove('defaultPosition');
        }
    });
});

const slideUpSections = document.querySelectorAll(".scrollAnimation");
slideUpSections.forEach((ele) => observeSlideUp.observe(ele));

// Animation 2 scroll fixed animations
const observeSlideUp2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('defaultPosition');
        }
    });
});

const slideUpSections2 = document.querySelectorAll(".scrollAnimationFixed");
slideUpSections2.forEach((ele) => observeSlideUp2.observe(ele));

// Animation 3 width expand animations
const observeSlideUp3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('defaultWidth');
        } else {
            entry.target.classList.remove('defaultWidth');
        }
    });
});

const slideUpSections3 = document.querySelectorAll(".widthAnimation");
slideUpSections3.forEach((ele) => observeSlideUp3.observe(ele));


// -------------------------------------------------------------------------------
function number_count() {
    let valueDisplays = document.querySelectorAll(".increase-numbers");
    let interval = 3000;

    for (let i = 0; i < valueDisplays.length; i++) {
        let startValue = 0;
        let endValue = parseInt(valueDisplays[i].getAttribute("data-val"));
        
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplays[i].textContent = startValue + "+";
            if (startValue === endValue) {
                clearInterval(counter);
            }
        }, duration);
    }
}


// Animation 2 scroll fixed animations
const homeAbout = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (!entry.target.classList.contains("numbersAdded")){
                number_count(); 
            }
            entry.target.classList.add('numbersAdded');

        }
    });
});

const aboutSection = document.querySelectorAll(".aboutcompany-block");
aboutSection.forEach((ele) => homeAbout.observe(ele));