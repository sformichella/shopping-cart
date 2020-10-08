

1. Add an event listener to the button part of the renderGame function
    * It should get the shopping cart from localStorage
        * If there isn't one, make an empty array
        * Otherwise, get it and parse it
    * It should chek if the cart already has the item in it
        * If not, create a new item
        * If so, increment the quantity by 1
    * Save