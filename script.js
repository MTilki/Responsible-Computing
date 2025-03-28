// ==========================
// Toast Notification Utility
// ==========================

function showToast(message, duration = 4000) {
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('show');
        toast.remove();
    }, duration);
}

// Example usage (remove in prod)
document.addEventListener('DOMContentLoaded', () => {
    // Simulate showing a toast after 2 sec
    setTimeout(() => {
        showToast('You’ve been matched with a carpool nearby!');
    }, 2000);
});


// ==========================
// Mobile Navigation Toggle (future enhancement)
// ==========================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-nav');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !expanded);
        navMenu.classList.toggle('open');
    });
}
