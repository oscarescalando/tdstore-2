import render from './render.js';

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async() => {
    try {
        const res = await fetch('js/cafe/api.json')
        const data = await res.json()
        const cafe = data.filter((dt) => dt.category == "cafe");
        const cafeEspecial = data.filter((dt) => dt.category == "cafe-especial");
        const infusion = data.filter((dt) => dt.category == "infusion");
        const infucionEspecial = data.filter((dt) => dt.category == "infusion-especial");
        const te = data.filter((dt) => dt.category == "te");
        const teEspecial = data.filter((dt) => dt.category == "te-especial");
        render(cafe);
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}
console.log('init');
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