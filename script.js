var acc = document.getElementsByClassName("btn");
    var i;
for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function () {
this.classList.toggle("active");
var text = this.nextElementSibling;
if (text.style.maxHeight) {
   text.style.maxHeight = null;
} else{
    text.style.maxHeight = text.scrollHeight + "px";
    }
});
}
//svg//
//svg end//

// button onclick
function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.quantity++;
      } else {
        cart.push({ name, price, quantity: 1, image });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(name + " added to cart!");
    }
//cart page
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
    function updateCart() {
      const cartDisplay = document.getElementById("cartDisplay");
      console.log(cartDisplay);
        if (cart.length === 0) {
        cartDisplay.innerHTML 
        = "<p>Your cart is empty.</p>";
        return;
      }
    cartDisplay.innerHTML = cart.map(item =>`
      <div class="cart-item">
      <div class="cart-image" style="background-image: url('${item.image}')"></div>
      <div class="cart-details">
      <p><strong>${item.name}</strong></p>
      <p>Price: $${item.price.toFixed(2)}</p>
      <p>Quantity: ${item.quantity}</p>
      <p class="remove" onclick="removeItem('${item.name}')">Remove</p>
      </div>
      </div>
  `).join("");
}
function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}
updateCart();