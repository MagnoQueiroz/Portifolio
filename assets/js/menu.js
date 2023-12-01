
const menu = document.querySelector(".icon-menu");

const element = document.querySelector("nav");
const close_menu = document.querySelector(".icon-close");

function toggleMenu(open = false) {
    const elementClassList = element.classList
    //se tá aberto fecha
    if (open == true) {
        elementClassList.remove("open");
    } else {
        //se tá fechado abre
        elementClassList.add("open");
    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});