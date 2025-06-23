/* jshint esversion: 6 */
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "success.html";
});

document.addEventListener("click", function (event) {
    const navbarToggler = document.getElementById("navbarToggle");
    const navbarCollapse = document.getElementById("navbarNav");

    const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(
        event.target);
    const isNavbarOpen = navbarCollapse.classList.contains("show");

    if (!isClickInsideNavbar && isNavbarOpen) {
        navbarToggler.click();
    }
});

const navLinks = document.querySelectorAll('.nav-link');
const navbarToggler = document.getElementById('navbarToggle');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});