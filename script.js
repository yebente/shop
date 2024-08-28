function calculateTotal() {
    const chickenPrice = 500;
    const eggPrice = 15;

// Get the quantities
    const chickenQuantity = document.getElementById('chicken-quantity');
    const eggQuantity = document.getElementById('egg-quantity');

    let chickenTotal = 0;
    let eggTotal = 0;

    // Calculate totals for each item if they exist in the DOM
    if (chickenQuantity) {
        chickenTotal = chickenQuantity.value * chickenPrice;
        document.getElementById('chicken-total').innerText = chickenTotal;
    }

    if (eggQuantity) {
        eggTotal = eggQuantity.value * eggPrice;
        document.getElementById('egg-total').innerText = eggTotal;
    }

    // Calculate the cart total
    const cartTotal = chickenTotal + eggTotal;
    document.getElementById('cart-total').innerText = cartTotal;
}

function removeItem(itemId) {
    // Remove the item from the DOM
    const item = document.getElementById(itemId);
    if (item) {
        item.remove();
    }

    // Recalculate the total after removal
    calculateTotal();
}