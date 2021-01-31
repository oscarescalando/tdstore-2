import render from './render.js';

const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var categoryMenu = urlParams.get('menu');

if (categoryMenu) {
    const panelTab = document.querySelectorAll(".tab-content");
    for (let i = 0; i < panelTab.length; i++) {
        panelTab[i].classList.remove("active");
    }
    const menu = document.getElementById(categoryMenu);
    menu.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async() => {
    try {
        const res = await fetch('js/cafe/api.json')
        const menu = await res.json()
        const cafe = menu.filter((dt) => dt.category == "cafe");
        const cafeEspecial = menu.filter((dt) => dt.category == "cafe-especial");
        const infusion = menu.filter((dt) => dt.category == "infusion");
        const infusionEspecial = menu.filter((dt) => dt.category == "infusion-especial");
        const te = menu.filter((dt) => dt.category == "te");
        const teEspecial = menu.filter((dt) => dt.category == "te-especial");
        render(cafe, 'cafe');
        render(cafeEspecial, 'cafe-especial');
        render(infusion, 'infusion');
        render(infusionEspecial, 'infusion-especial');
        render(te, 'te');
        render(teEspecial, 'te-especial');
    } catch (error) {
        console.log(error)
    }
}

const tabs = document.querySelectorAll(".tabs");
const tab = document.querySelectorAll(".tab");
const panel = document.querySelectorAll(".tab-content");

function onTabClick(event) {
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
    }
    for (let i = 0; i < panel.length; i++) {
        panel[i].classList.remove("active");
    }
    event.target.classList.add('active');
    let classSrting = event.target.getAttribute('data-target');
    console.log(classSrting);

    document.getElementById('panels').getElementsByClassName(classSrting)[0].classList.add('active');
}

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', onTabClick, false);
}