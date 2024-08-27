function calculateTotal() {
    const chickenPrice = 500;
    const eggPrice = 15;

    // Get the quantities
    const chickenQuantity = document.getElementById('chicken-quantity').value;
    const eggQuantity = document.getElementById('egg-quantity').value;

    // Calculate totals for each item
    const chickenTotal = chickenQuantity * chickenPrice;
    const eggTotal = eggQuantity * eggPrice;

    // Update the totals in the DOM
    document.getElementById('chicken-total').innerText = chickenTotal;
    document.getElementById('egg-total').innerText = eggTotal;

    // Calculate the cart total
    const cartTotal = chickenTotal + eggTotal;
    document.getElementById('cart-total').innerText = cartTotal;
}
