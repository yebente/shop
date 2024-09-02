// Initialize the cart from localStorage or start with an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to calculate the total price for each product
function calculateTotal() {
    const chickenPrice = 500;
    const eggPrice = 15;

    // Get the quantities from the input fields
    const chickenQuantity = document.getElementById('chicken-quantity').value || 0;
    const eggQuantity = document.getElementById('eggs-quantity').value || 0;

    // Calculate totals for each item
    const chickenTotal = chickenQuantity * chickenPrice;
    const eggTotal = eggQuantity * eggPrice;

    // Update the DOM with calculated totals
    document.getElementById('chicken-total').innerText = chickenTotal;
    document.getElementById('eggs-total').innerText = eggTotal;

    return { chickenTotal, eggTotal };
}

// Function to add items to the cart
function addToCart(item) {
    const quantityInput = document.getElementById(item + '-quantity');
    const quantity = parseInt(quantityInput.value);

    const items = {
        chicken: {
            price: 500,
            img: 'images/farm raised chicken.jpg'
        },
        eggs: {
            price: 15,
            img: 'images/free-range farm eggs.jpg'
        }
    };

    // Ensure the item exists in the items object
    if (!items[item]) {
        console.error(`Item ${item} not found in the items object.`);
        return;
    }

    const cartItem = cart.find(cartItem => cartItem.name === item);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({
            name: item,
            price: items[item].price,
            quantity: quantity,
            img: items[item].img
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item.charAt(0).toUpperCase() + item.slice(1) + " added to cart!");
}

// Function to display the cart on the cart page
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return; // Check if the cart page exists

    cartItemsContainer.innerHTML = ''; // Clear previous cart items
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        // Create cart item element
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="item-details">
                <h2>${item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h2>
                <p>Price: Ksh. ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: Ksh. ${itemTotal}</p>
                <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItemElement);
    });

    document.getElementById('cart-total').innerText = total;
}

// Function to remove items from the cart
function removeFromCart(itemName) {
    cart = cart.filter(cartItem => cartItem.name !== itemName);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the display
    displayCart();
}

// Function to simulate the payment process
function makePayment() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Payment of Ksh. ${totalAmount} successful!`);

    // Clear the cart after payment
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Refresh the cart display after payment
}

// On page load, display the cart if on the cart page
if (document.getElementById('cart-items')) {
    displayCart();
}

// Bind the makePayment function to a button if present
if (document.getElementById('checkout-btn')) {
    document.getElementById('checkout-btn').addEventListener('click', makePayment);
}

