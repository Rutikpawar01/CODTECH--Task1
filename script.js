let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const billTotal = document.getElementById('bill-total');

  cartItems.innerHTML = '';
  cart.forEach(({ item, price }, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Rupees {item} - Rupees {price}`;
    cartItems.appendChild(listItem);
  });

  cartTotal.textContent = total;
  billTotal.textContent = total;
}
