import {productsKey, renderGame} from './utils.js';
import {hardCodedGamesArray} from './games-data.js';

const gamesList = document.getElementById('games-list');

const productsArray = JSON.parse(localStorage.getItem(productsKey)) || [];


for (let i = 0; i < productsArray.length; i++) {
    let game = productsArray[i];

    gamesList.appendChild(renderGame(game));
}