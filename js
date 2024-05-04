
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Menu Open Close
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};

//Menu close When Scroll
window.onscroll = () =>{
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
} 

//Sroll Animation   
const animate = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2000',
  delay: '400',
});

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = ()=>{
cart.classList.add("active");
};
closeCart.onclick = ()=>{
cart.classList.remove("active");
};

if(document.readyState == "loading"){
document.addEventListener("DOMContentLoaded", ready);
} else {
ready();
}

function ready(){
var removeCartButtons = document.getElementsByClassName('cart-remove')
console.log(removeCartButtons); 
for(var i = 0; i< removeCartButtons.length; i++){
  var button = removeCartButtons[i];
  button.addEventListener('click', removeCartItem);
}
// Quantity changes
  var quantityInputs = document.getElementsByClassName('cart-quantity');
  for(var i = 0; i< quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
 // Add to Cart
 var addCart = document.getElementsByClassName('add-cart');
 for (var i = 0; i < addCart.length; i++ ){
  var button = addCart[i];
  button.addEventListener('click', addCartClicked);
 }
 //Buy button Work
 document.getElementsByClassName('btn-buy')[0].addEventListener("click", buyButtonClicked);
}
function buyButtonClicked(){
  alert('Your Order is placed');
  var cartContent = document.getElementsByClassName('cart-content')[0]
  while(cartContent.hasChildNodes){
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}
}
 
function removeCartItem(event){
var buttonClicked = event.target
buttonClicked.parentElement.remove()
}
//Quantyty changes
function quantityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

//Add to cart
function addCartClicked(event){
  var button = event.target;
  var shopProducts = button.parentElement
  var title =  shopProducts.getElementsByClassName("product-title")[0].innerText
  var price = shopProducts.getElementsByClassName("price")[0].innerText;

  addProductToCart(title,price);
  updatetotal();
}
function addProductToCart(title,price){
  var cartShopBox = document.createElement("div");
carShopBox.classList.add("cart-box");
var cartItems = document.getElementsByClassName('cart-content')[0]
var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
for (var i = 0; i < cartItemsNames.length; i++ ){
  alert("You have already add this item to cart");
  return;
}
}
var cartBoxContent = `
<img src="${productImg}" alt="" class="cart-img">
                <div class="detail-box">
                    <div class="cart-product-title">${title}</div>
                    <div class="cart-price">${price}</div>
                    <input type="number" value="1" class="cart-quantity">
                </div>
                <i class='bx bx-trash-alt cart-remove'></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox)
cartShopBox
  .getElementsByClassName("cart-remove")[0]
  .addEventListener("click", removeCartItem);
cartShopBox
  .getElementsByClassName("cart-quantity")[0]
  .addEventListener("change", quantityChanged);
function updatetotal(){
var cartContent = document.getElementsByClassName("cart-content")[0];
var cartBoxes = cartContent.getElementsByClassName("cart-box");
var total = 0;
for (var i = 0 ; i < cartBoxes.length; i++){
  var cartBox = cartBoxes[i];
  var priceElement = cartBox.getElementsByClassName("cart-price")[0];
  var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
  var price = parseFloat(priceElement.innerText.replace("Dong", ""));
  var quantity = quantityElement.value;
  total = total + (price * quantity);
 // If price Contain some Cents Value
 total = Math.round(total*50000)/100;
  document.getElementsByClassName("total-price")[0].innerText = total+"Dong" ;
}

}

animate.reveal(".nav");
animate.reveal(".home-text", {origin:"left"});
animate.reveal(".home-img", {origin:"bottom"});
animate.reveal(".ser-box , .product-box, .team-box, .book-data", {interval: 100});
