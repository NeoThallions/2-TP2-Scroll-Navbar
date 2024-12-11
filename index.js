const nav = document.querySelector("nav");

let lastScroll = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY < lastScroll) {
        nav.style.top = "0px";
        nav.style.transition = "0.5s";
    } else {
        nav.style.top = "-60px";
        nav.style.transition = "0.5s";
    }
    lastScroll = window.scrollY;
});
