import {
    renderRow,
    calcSubtotal,
    calcOrderTotal,
    findById,
    cartKey
} from './utils.js';

import {
    gamesArray,
} from './games-data.js'


// Get cart from localStorage
const cart = JSON.parse(localStorage.getItem(cartKey));


// Render Rows on the table
const table = document.getElementById('cart-table');

for (const cartItem of cart) {
    const row = renderRow(cartItem);

    table.append(row);
}


// Calculate total
const subtotals = [];

for (const cartItem of cart) {
    const matchingProduct = findById(gamesArray, cartItem.id);
    const subtotal = calcSubtotal(matchingProduct.price, cartItem.quantity);

    subtotals.push(subtotal);
}

const total = calcOrderTotal(subtotals);


// Add total to table
const footer = document.createElement('tr');
const footerLeft = document.createElement('td');
const footerRight = document.createElement('td');

footerLeft.setAttribute('colspan', 1);
footerRight.setAttribute('colspan', 3);

footerRight.textContent = `Total: $${total}`;

footer.append(footerLeft, footerRight);
table.append(footer);