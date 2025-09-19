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
//nav//
    const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn"),
    nav2 = document.querySelector(".nav2"),
    sticky=nav.offsetTop;
    

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    nav2.classList.toggle("nav2")
    if (nav.classList.contains("openSearch")) {
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    nav2.classList.toggle("nav2");
    searchIcon.classList.replace("uil-times", "uil-search");
});

navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
    nav2.classList.toggle("nav2");

});

// nav bar responsiveness
const hamMenu= document.querySelector('.ham-menu')
const offScreenMenu= document.querySelector('.off-screen-menu')
hamMenu.addEventListener('click', () => {hamMenu.classList.toggle('active');
offScreenMenu.classList.toggle('active')
}) 

//Cart storage in localstorage
function getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}
//Update cart counting
function updateCartCount(){
    const cart= getCart() 
    const cartCount= document.querySelector(".cart-count");
    if(cartCount){
        cartCount.textContent= cart.length;
    }
}

//Add to cart
document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelectorAll(".product").forEach(product => {
        const name= product.querySelector("h4").textContent;
        const rawPrice = product.querySelector(".price").textContent.replace("$", "").trim();
        const price = parseFloat(rawPrice);
        const btn= product.querySelector(".add-to-cart").addEventListener("click", ()=>{
            const cart= getCart()
            cart.push({name, price});
            saveCart(cart);
            updateCartCount();
            alert(`${name} added to cart🎉`)
        });
    });
//
updateCartCount();
})