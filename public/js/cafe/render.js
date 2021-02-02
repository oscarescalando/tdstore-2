function renderElement(store) {
    const element = buildElement(store)
    elementDiv.append(element)
}

let elementDiv = null;

function buildElement({ title, description, image_path, image, category, id, price, info, order }) {

    let style = '';
    let heightImg = '';
    let tabInfo = '';

    if (image) {
        style = `style="background-image: url('images/la_vieja_cuba/catalogo/${image_path}')"`
        heightImg = 'h-56';
    }

    let btnWhatsapp = `
        <a class="p-2 mx-5 -mb-4 text-white bg-black rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500" target="_blank"
        href="https://api.whatsapp.com/send?phone=34677695267&text=*Hola!*%0D%0AEstoy interesado en el Producto%3A%0D%0A*${title}*%0D%0A">
        <svg class="w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </a>
    `;


    if (info) {
        tabInfo = `
        <button type="button" 
            x-on:click.prevent="active = '${id}' " 
            x-bind:class="{'bg-opacity-50': active === '${id}' }">
            <div class="flex">
                <img src="./images/la_vieja_cuba/images/cafe.png" class="h-5"/> 
                <div > Ver información ..</div>
            </div>
        </button>

        <div class="p-4"  x-show="active === '${id}'" x-transition:enter="transition ease-out duration-300 origin-top"
        x-transition:enter-start="opacity-0 transform scale-y-0"
        x-transition:enter-end="opacity-100 transform scale-y-100">
            <div class="p-6">
            ${info}
            </div>
        </div>
        `
    }


    const template = `
      <div class="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md"  x-data="{ open: false }">
        <div class="flex items-end justify-end w-full ${heightImg}  bg-cover" ${style}>
            ${btnWhatsapp}
        </div>
        <div class="px-5 py-3 bg-white" x-data="{active: null}">
            <h3 class="text-gray-700 uppercase">${title}</h3>
            <span class="mt-2 text-gray-500">${description}</span>
             
            ${tabInfo}
        </div>     
    </div>
      `;

    const store = document.createElement('div')
    store.innerHTML = template
    return store.firstElementChild
}


function cleanStoreList(element_id) {
    element_id.innerHTML = ''
}

export default function renderStoreList(list, element_id) {
    const elementId = document.getElementById(element_id)
    cleanStoreList(elementId)
    elementDiv = elementId;
    list.forEach(renderElement)
}