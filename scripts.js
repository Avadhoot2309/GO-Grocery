document.addEventListener('DOMContentLoaded', () => {
    // Example of a smooth scroll effect for navigation
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example of a simple modal popup
    const viewDetailsButtons = document.querySelectorAll('.btn-view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Details coming soon!');
        });
    });
});

