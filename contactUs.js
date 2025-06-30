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

const inputs = document.querySelectorAll(".input");
function focusFunction(){
    let parent = this.parentNode;
    parent.classList.add("focus");

}
function blurFunction(){
    let parent = this.parentNode;
    if(this.value ==""){
        parent.classList.remove("focus");
    }
    

}
inputs.forEach((input) => {
    input.addEventListener('focus', focusFunction);
    input.addEventListener('blur', blurFunction);
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzDHDx-RvxlePgyB8npCFCG30cvuSK3CrAMoZCmf3sCgXHSVdbAZrppE39Hgakoy_VT/exec';

const form = document.querySelector("#segundoForm");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(Response => {
        alert('Information was sent. Await for answer, thanks!');
        form.reset();
        parent.classList.remove("focus");
    })
    .catch(error => {
        alert('Error Sending. Try again');
        console.log("Erro:", error);
    });
});