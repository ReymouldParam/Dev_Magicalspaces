// // Function to check if an element is in the viewport
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Function to add 'in-view' class to section2 when it comes into view
// function handleScroll() {
//     const section2 = document.querySelector('.section2');
//     if (isInViewport(section2)) {
//         section2.classList.add('in-view');
//     } else {
//         section2.classList.remove('in-view'); // Optional: Remove class when out of view
//     }
// }

// // Add scroll event listener
// document.addEventListener('scroll', handleScroll);

// // Trigger the scroll function on page load in case section2 is already in view
// window.addEventListener('load', handleScroll);
