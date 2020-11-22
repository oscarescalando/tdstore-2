export function renderStoreListFromMap(list, map) {
  cleanStoreList()
  list.forEach(storeId => renderElement(map.get(storeId)))
}

function renderElement(store) {
  const element = buildElement(store)
  window.container.append(element)
}

function buildElement({ title, description, image_path, image, category, id, price, info, order }) {

    let image_div = '';

    if (image) {
        image_div = `
            <div class="bg-white md:rounded-r-none rounded-lg">
                <img loading="lazy" class=" object-cover object-left w-full h-full rounded-lg md:w-56 md:h-full md:rounded-r-none" src="images/${image_path}" alt="${title}">
            </div>
        `;

    }

    const template1 = `
    
     <div class="mx-2 mt-4 rounded-lg md:mx-0 md:w-1/2 md:flex md:bg-white ">
        
                 ${image_div}

                <div class="relative  p-2 mx-2 -mt-2 bg-white rounded-lg shadow-lg md:bg-transparent">
                    <h2 class="text-xl font-semibold tracking-tight text-base uppercase">${title} </h2>
                    <p class="mt-2 leading-snug text-gray-700 ">
                    ${description}
                    </p>
                   
                    <div class="mt-2 text-lg font-semibold text-right text-base">${price}</div>
                   
                </div>
        </div>`;

    const template2 = `
    <div class="container mx-auto md:flex md:flex-wrap w-full mt-4" >
            <div class="flex max-w bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="w-1/2 bg-cover h-56" style="background-image: url('../images/${image_path}')">
                </div> 
                <div class="w-1/2 p-4">
                <h1 class="text-gray-900 font-bold text-2xl">${title}</h1>
                <p class="mt-2 text-gray-600 text-sm">${description}</p>
                <div class="flex item-center mt-2">
                    
                </div>
                <div class="flex item-center justify-between mt-3">
                    <h1 class="text-gray-700 font-bold text-xl">$ ${price}</h1>
                    <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                </div>
                </div>
            </div>

        </div>
    `;

    const template = `
        <div class="max-w bg-white shadow-lg rounded-lg overflow-hidden my-10 md:w-1/2 md:mx-1">
                <div class="px-4 py-2 bg-gray-900">
                    <h1 class="text-gray-200 font-bold text-3xl uppercase">${title}</h1>
                    <p class="text-gray-200 text-sm mt-1">Lorem ipsum facere recusandae voluptatibus</p>
                </div>
                <img loading="lazy" class=" w-full object-cover" src="./images/${image_path}" alt="${title}">
                <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 class="text-gray-200 font-bold text-xl">$${price}</h1>
                    <a class="px-3 py-1 text-sm bg-blue-600 font-semibold rounded text-white" target="_blank" 
                    href="https://api.whatsapp.com/send?phone=584147027645 &text=*Hola!*%0D%0AEstoy interesado en el Producto%3A%0D%0A*${title}* - ${price}$%0D%0A${id}%0D%0A">Información</a> 
                </div>
            </div>
    `;

 
  const store = document.createElement('div')
  store.innerHTML = template
  return store.firstElementChild
}






function cleanStoreList() {
  window.container.innerHTML = ''
}

export default function renderStoreList(list) {
  cleanStoreList()
  // console.table(list, ['title', 'poster_path', 'vote_average', 'id'])
  list.forEach(renderElement)
}

