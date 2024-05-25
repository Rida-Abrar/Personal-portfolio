document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handler
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        form.reset(); // Reset form fields after submission
    });
});
