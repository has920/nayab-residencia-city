document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('#main-nav a, .btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) { // Only apply to internal links
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Calculate offset for fixed header
                    const headerOffset = document.getElementById('main-header').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset - 20; // Added extra padding

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const mainNav = document.getElementById('main-nav');
                    if (mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                    }
                }
            }
        });
    });

    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Dynamic Current Year in Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Form Submission (Example - needs backend for actual submission)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a server
            // using Fetch API or XMLHttpRequest.
            // For demonstration, let's just log it and show an alert.

            const formData = new FormData(contactForm);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            console.log('Form Submitted Data:', data);

            alert('Thank you for your inquiry! We will get back to you soon.');

            contactForm.reset(); // Clear the form
        });
    }

    // Optional: Lightbox initialization (if using a library like Lightbox2)
    // Make sure Lightbox2 JS and CSS are linked in your HTML
    // No specific JS needed here if using data-lightbox attributes,
    // as Lightbox2 automatically initializes.

    // "View More Images" button functionality (example)
    const viewMoreGalleryBtn = document.querySelector('.view-more-gallery');
    if (viewMoreGalleryBtn) {
        viewMoreGalleryBtn.addEventListener('click', function() {
            alert('This would load more images or redirect to a dedicated gallery page!');
            // You could dynamically load more images using AJAX here
            // or navigate to a full gallery page.
        });
    }
});