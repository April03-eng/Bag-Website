//get from local storage

function getCart(){
    return
    JSON.parse(localStorage.getItem("cart")) || [];
}

function renderCart(){
    const cart= getCart()
    const cartItems= document.getElementById("cart-items")
    const cartTotal= document.getElementById("cart-total")

    cartItems.innerHTML= "";
    let total= 0;

    cart.forEach(function(item){
        const li= document.createElement("li")
        li.textContent= `${item.name} - ${item.price}`
        cartItems.appendChild(li)
        total += item.price;

    });

    cartTotal.textContent= total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", renderCart);

//Clear cart