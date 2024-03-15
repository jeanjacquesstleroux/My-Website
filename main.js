// Navigation bar scrolling effects
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);
});

//Modal in research section
const researchModals = document.querySelectorAll(".research-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        const modal = () => {
            researchModals[i].classList.add("active");
        };
        modal();
    });
});

modalCloseBtns.forEach((modalCloseBtn, i) => {
    modalCloseBtn.addEventListener("click", () => {
        researchModals[i].classList.remove("active");
    });
});

//Modal in projects section
const projectsModals = document.querySelectorAll(".projects-modal");
const imgCards = document.querySelectorAll(".img-card");
const projectsCloseBtns = document.querySelectorAll(".projects-close-btn");

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        const modal = () => {
            projectsModals[i].classList.add("active");
        };
        modal();
    });
});

projectsCloseBtns.forEach((projectsCloseBtn, i) => {
    projectsCloseBtn.addEventListener("click", () => {
        projectsModals[i].classList.remove("active");
    });
});

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Active nav-menu items on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".navigation-items a[href*='" + id + "']").classList.add("active");
        } else {
            document.querySelector(".navigation-items a[href*='" + id + "']").classList.remove("active");
        }
    });
});

//Light-dark theme button
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".navigation-items a")

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});