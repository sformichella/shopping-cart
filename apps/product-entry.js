import {
    addProduct
} from './utils.js';

const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);

    const newProduct = {
        id: formData.get('id'),
        name: formData.get('name'),
        developer: formData.get('developer'),
        image: formData.get('image'),
        description: formData.get('description'),
        category: formData.get('category'),
        price: formData.get('price'),
    }

    console.log(newProduct.id);

    addProduct(newProduct);

    window.location = '../products/index.html';
})