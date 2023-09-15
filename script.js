// Define an array to store item details including name, price, and quantity.
let itemList = [{}, { name: "Sweet German Chocolate", price: 400, quantity: 0 },
    { name: "White Chocolate", price: 600, quantity: 0 },
    { name: "Dark Chocolate", price: 500, quantity: 0 },
    { name: "Semisweeet Chocolate", price: 900, quantity: 0 },
    { name: "Bittersweet Chocolate", price: 300, quantity: 0 },
    { name: "Unsweetened Chocolate", price: 900, quantity: 0 },
    { name: "Cocoa Powder", price: 800, quantity: 0 },
    { name: "Milk Chocolate", price: 300, quantity: 0 },
    { name: "Couverture Chocolate", price: 900, quantity: 0 },
]

// Initialize variables to track the total price, total quantity, number of boxes, and original total price.
let totalPrice = 0;
let totalQuantity = 0;
let numberofbox = 1;
let orignal = 0;

// Get references to HTML elements by their IDs.
const checkout = document.getElementById('CheckOut');
const boxes = document.getElementById('boxes');

// Function to add an item to the cart.
function additem(event) {
    event.preventDefault();
    if (totalQuantity <= 8) {
        const item = event.target;
        const itemId = item.getAttribute("data-id");
        const perquantity = document.getElementById('quantity-' + itemId);
        const price = itemList[itemId].price;
        
        // Increase the quantity of the selected item and update total values.
        itemList[itemId].quantity++;
        totalQuantity++;
        perquantity.innerHTML = itemList[itemId].quantity;
        totalPrice = totalPrice + price;
        orignal = totalPrice;
        checkout.innerHTML = totalPrice;
    }
}

// Function to remove an item from the cart.
function removeitem(event) {
    event.preventDefault();
    if (totalQuantity >= 1) {
        const item = event.target;
        const itemId = item.getAttribute("data-id");
        const perquantity = document.getElementById('quantity-' + itemId);
        const price = itemList[itemId].price;

        // Decrease the quantity of the selected item and update total values.
        itemList[itemId].quantity--;
        totalQuantity--;
        perquantity.innerHTML = itemList[itemId].quantity;
        totalPrice = totalPrice - price;
        orignal = totalPrice;
        checkout.innerHTML = totalPrice;
    }
}

// Function to increase the number of boxes.
function increaseBoxes(event) {
    event.preventDefault();
    numberofbox++;
    totalPrice = totalPrice + orignal;
    checkout.innerHTML = totalPrice;
    boxes.innerHTML = numberofbox;
}

// Function to decrease the number of boxes.
function decreaseBoxes(event) {
    event.preventDefault();
    if (numberofbox >= 2) {
        numberofbox--;
        totalPrice = totalPrice - orignal;
        checkout.innerHTML = totalPrice;
        boxes.innerHTML = numberofbox;
    }
}
