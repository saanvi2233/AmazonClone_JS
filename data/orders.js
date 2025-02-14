// Retrieve orders from local storage or initialize as an empty array
export const orders = JSON.parse(localStorage.getItem('orders')) || [];

// Function to add an order
export function addOrder(order) {
    // Push the new order into the orders array
    orders.push(order);
    // Save the updated orders array to local storage
    saveToStorage();
}

// Function to save orders to local storage
function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders)); // Ensure the key is 'orders'
}