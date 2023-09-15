Approach:

Item List: An array named itemList is defined to store details of chocolate products. Each object in the array represents an item with properties such as name, price, and quantity. Initially, all quantities are set to zero.

Total Variables: Variables like totalPrice, totalQuantity, numberofbox, and orignal are initialized to keep track of the total price, total quantity of items in the cart, the number of boxes to purchase, and the original total price for reference.

HTML Element References: References to HTML elements are obtained using getElementById and stored in variables for later manipulation. For example, checkout refers to the element displaying the total price, and boxes refers to the element displaying the number of boxes.

Add Item Function (additem):

This function is called when a user clicks the "Add To Cart" button associated with a specific item.
It prevents the default form submission action.
It checks if the total quantity in the cart is less than or equal to 8 (an arbitrary limit).
If the limit is not reached, it:
Retrieves the clicked item's ID.
Updates the quantity of the selected item in the itemList.
Increases the totalQuantity.
Updates the quantity display for the selected item.
Increases the totalPrice by the item's price.
Updates orignal with the current totalPrice.
Updates the checkout display.
Remove Item Function (removeitem):

Similar to the additem function, but it decreases the quantity and updates the total values accordingly when a user clicks the "Remove" button for an item.
Increase Boxes Function (increaseBoxes):

This function is called when a user clicks the "+" button to increase the number of boxes.
It prevents the default action.
It increments the numberofbox.
Increases the totalPrice by the orignal price (the cost of a single box).
Updates the checkout display and the number of boxes display.
Decrease Boxes Function (decreaseBoxes):

Similar to the increaseBoxes function, but it decreases the number of boxes and updates the total values accordingly.