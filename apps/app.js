import {
    hardCodedGamesArray
} from './games-data.js';

import {
    productsKey
} from './utils.js';

// Initialize products array if empty
const productsArray = JSON.parse(localStorage.getItem(productsKey)) || [];

if (productsArray.length === 0) {
    for (const game of hardCodedGamesArray) {
        productsArray.push(game);
    }

    localStorage.setItem(productsKey, JSON.stringify(productsArray));
}
