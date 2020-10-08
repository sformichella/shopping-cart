import {
    renderRow,
    calcSubtotal,
    calcOrderTotal,
    findById,
    cartKey,
    productsKey
} from './utils.js';


const productsArray = JSON.parse(localStorage.getItem(productsKey));


// Get Stuff
const cart = JSON.parse(localStorage.getItem(cartKey));
const placeOrder = document.getElementById('place-order-button');


if (cart) {

    // Render Rows on the table
    const table = document.getElementById('cart-table');

    for (const cartItem of cart) {
        const row = renderRow(cartItem);

        table.append(row);
    }

    // Calculate total
    const subtotals = [];

    for (const cartItem of cart) {
        const matchingProduct = findById(productsArray, cartItem.id);
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

    //
} else {
    placeOrder.setAttribute('disabled', true);
}


placeOrder.addEventListener('click', () => {
    alert(JSON.stringify(cart, true, 2));
    localStorage.removeItem(cartKey);
    location.href = '../index.html'
})