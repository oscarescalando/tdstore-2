import render from './render.js';

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('js/api.json')
        const data = await res.json()

        render(data);
        console.log(data)
        //pintarProductos(data)
        //detectarBotones(data)
    } catch (error) {
        console.log(error)
    }
}