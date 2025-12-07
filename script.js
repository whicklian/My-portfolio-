// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Project modal
const modal = document.getElementById("projectModal");
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Scroll reveal
const scrollElements = document.querySelectorAll(".scroll-reveal");
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};
const displayScrollElement = (element) => {
    element.classList.add('active');
};
const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if (elementInView(el, 1.25)) displayScrollElement(el);
    });
};
window.addEventListener('scroll', handleScrollAnimation);
