document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Unobserve after showing animation
            }
        });
    }, { threshold: 0.1 });

    const interiorsCards = document.querySelectorAll('.interiors-card');
    interiorsCards.forEach(card => observer.observe(card));
});
