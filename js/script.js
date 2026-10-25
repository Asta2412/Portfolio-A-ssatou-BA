// =========================================
// MENU MOBILE
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

}


// Fermer le menu après avoir cliqué sur un lien
navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
        }

    });

});


// =========================================
// ANIMATION AU SCROLL
// =========================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    observer.observe(element);
});


// =========================================
// ANNÉE AUTOMATIQUE
// =========================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// =========================================
// OMBRE DU HEADER AU SCROLL
// =========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(23, 23, 23, 0.06)";

    } else {

        header.style.boxShadow = "none";

    }

});