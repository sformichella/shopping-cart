import {
    gamesArray,
} from './games-data.js'

export const cartKey = 'CART';
export const productsKey = 'PRODUCTS';

// renderGame Function. Creates a list element from a game object.
export function renderGame(game) {
    let li = document.createElement('li');
    li.classList.add('game');

    if (game.onSale) {
        li.classList.add('on-sale');
    }


    let title = document.createElement('p');
    title.classList.add('title');
    title.textContent = game.name;

    let developer = document.createElement('p');
    developer.classList.add('developer');
    developer.textContent = game.developer;

    let cover = document.createElement('img');
    cover.classList.add('cover');
    cover.src = `../assets/${game.image}`;

    let price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$${game.price.toFixed(2)}`;

    let addButton = document.createElement('button');
    addButton.textContent = 'Add to cart';
    addButton.value = game.id;

    addButton.addEventListener('click', () => {
        const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

        if (!findById(cart, game.id)) {
            cart.push({id: game.id, quantity: 0});
        }

        const cartItem = findById(cart, game.id);
        cartItem.quantity += 1;

        localStorage.setItem(cartKey, JSON.stringify(cart));
    })

    li.append(title, developer, cover, price, addButton)

    return li;
}


// renderRow function. Creates a tr element with title, quantity, price, and subtotal
export function renderRow(cartItem) {
    const matchingProduct = findById(gamesArray, cartItem.id);
    const price = matchingProduct.price;
    const quantity = cartItem.quantity;

    const row = document.createElement('tr');

    const titleElem = document.createElement('td');
    const quantityElem = document.createElement('td');
    const priceElem = document.createElement('td');
    const subtotalElem = document.createElement('td');

    titleElem.textContent = matchingProduct.name;
    quantityElem.textContent = cartItem.quantity;
    priceElem.textContent = `$${matchingProduct.price.toFixed(2)}`;
    subtotalElem.textContent = `$${calcSubtotal(quantity, price).toFixed(2)}`;

    subtotalElem.classList.add('subtotal');


    row.append(titleElem, priceElem, quantityElem, subtotalElem);
    return row;
}


// Find element by ID
export function findById(someArray, someId) {
    for (let i = 0; i< someArray.length; i++) {

        const arrayElem = someArray[i];
        
        if (arrayElem.id === someId) {
            return arrayElem;
        }
    }
    return null;
};


// Calculate subtotal function
export function calcSubtotal(price, quantity) {
    return price.toFixed(2) * quantity;
}


// Calculate Order Total
export function calcOrderTotal(subtotalArray) {
    let total = 0;

    for (const subtotal of subtotalArray) {
        total += subtotal;
    };

    return total;
}


// Add Product to localStorage
export function addProduct(gameObject) {
    const productsArray = JSON.parse(localStorage.getItem(productsKey)) || [];

    productsArray.push(gameObject);

    localStorage.setItem(productsKey, JSON.stringify(productsArray));
}