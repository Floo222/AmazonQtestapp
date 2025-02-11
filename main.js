// Smooth scrolling effect for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Fade-in effect for sections on scroll
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

// Initial styling for fade-in effect
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.6s ease-out";
});
