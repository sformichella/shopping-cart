import {
    renderGame,
    renderRow,
    findById,
    calcSubtotal,
    calcOrderTotal
} from '../apps/utils.js'


const test = QUnit.test;

// renderGame Test
test('renderGame should return a list element with the appropriate contents when passed a game object', (expect) => {
    const game = {
        id: 'csgo',
        name: 'Counter-Strike: Global Offensive',
        developer: 'Valve Corporation',
        image: 'csgo.png',
        description: 'a competitive first-person shooter game',
        category: 'fps',
        price: 15.00,
        onSale: false,
    }

    const expected = '<li class="game"><p class="title">Counter-Strike: Global Offensive</p><p class="developer">Valve Corporation</p><img class="cover" src="../assets/csgo.png"><p class="price">$15.00</p><button value="csgo">Add to cart</button></li>'

    const actual = renderGame(game);

    expect.equal(actual.outerHTML, expected)
});


// renderRow Test
test('renderRow should return a table row element with the appropriate contents when passed a cart item object', (expect) => {
    const cartItem = {
        id: 'csgo',
        quantity: 5
    }

    const expected = '<tr><td>Counter-Strike: Global Offensive</td><td>$15.00</td><td>5</td><td class="subtotal">$75.00</td></tr>';

    const actual = renderRow(cartItem).outerHTML;

    expect.equal(actual, expected);
})


// findByID Test
test('findByID should take in an id and an array and return the matching item', function(assert) {
    const spot = {
        id: 'spot',
        type: 'doggy',
        weight: 5
    };
    
    const douglas = {
        id: 'douglas',
        type: 'doggy',
        weight: 12
    };
    
    const jumpy = {
        id: 'jumpy',
        type: 'froggy',
        weight: 1
    };
    
    const myArray = [
        spot,
        douglas,
        jumpy
    ];

    const myId1 = 'spot';
    const myId2 = 'jumpy';
    const expected1 = spot;
    const expected2 = jumpy;

    const actual1 = findById(myArray, myId1);
    const actual2 = findById(myArray, myId2);
    
    assert.equal(actual1, expected1);
    assert.equal(actual2, expected2);
});


// calcSubtotal test
test('calcSubtotal should return $100.00 when passed 25.00 and 4', (expect) => {
    const price = 25.00;
    const quantity = 4;

    const expected = 100.00;
    const actual = calcSubtotal(price, quantity);

    expect.equal(actual, expected);
})


// calcOrderTotal test
test('calcOrderTotal should return 165.00 when passed [25.00, 30.00, 50.00, 60.00', (expect) => {
    const mySubtotals = [25.00, 30.00, 50.00, 60.00];

    const expected = 165.00;
    const actual = calcOrderTotal(mySubtotals);

    expect.equal(actual, expected);
})