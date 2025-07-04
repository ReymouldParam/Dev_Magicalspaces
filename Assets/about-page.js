// Wait for the entire page to load
window.addEventListener('load', () => {
    // Create an instance of IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'section2-container' class to trigger the animation
                entry.target.classList.add('section2-container');
                // Optionally, stop observing the element after it's visible
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Find the section with the class 'section2'
    const section2 = document.querySelector('.section2');

    // Check if the element exists to avoid errors
    if (section2) {
        // Observe the section2 element
        observer.observe(section2);
    } else {
        // Log an error if the element is not found
        console.error('Element with class ".section2" not found.');
    }
});


// toggler navbar
// jQuery for slideToggle effect
$(document).ready(function() {
    $(".toggler").click(function() {
        $(".ul-align").slideToggle("slow"); // Toggle menu visibility
        $(this).toggleClass("open"); // Add or remove 'open' class to toggler
    });
});


