class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.extraNav = document.querySelector("#navAncoras2"); 
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();

        if (this.extraNav) {
            const isVisible = this.extraNav.style.display === "block";
            this.extraNav.style.display = isVisible ? "none" : "block"; 
        }
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile_menu",
    ".navList",
    ".navList li"
);
mobileNavBar.init();

const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for(let i=0; i < q.length; i++){
    q[i].addEventListener('click', () => {
        a[i].classList.toggle('a-opened');
        arr[i].classList.toggle('arrow-rotated');
    });
}

