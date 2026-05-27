// script.js

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });

    });

});


// TESTIMONIALS CAROUSEL

let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showTestimonial(index) {
    // Remove active class from all cards
    testimonialCards.forEach(card => card.classList.remove('active'));
    
    // Add active class to current card
    testimonialCards[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

prevBtn.addEventListener('click', prevTestimonial);
nextBtn.addEventListener('click', nextTestimonial);

// Initialize with first testimonial active
showTestimonial(0);


// BACK TO TOP BUTTON

const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});