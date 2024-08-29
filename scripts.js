window.addEventListener('scroll', () => {
    const slideUpElements = document.querySelectorAll('.slide-up');

    slideUpElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 50) {
            element.classList.add('visible');
        }
    });
});
