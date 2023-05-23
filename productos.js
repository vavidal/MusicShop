let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

//Abrir Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

//Cerrar Cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// Cart JS
if (document.readyState == 'loading') {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  var addCart = document.getElementsByName('add_cart');
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  // boton de comprar
  document.getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}

function buyButtonClicked() {
  alert('Su compra ha sido exitosa');
  var cartContent = document.getElementsByClassName('cart-content')[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;

  var cartItems = document.getElementsByClassName('cart-content')[0];
  var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
  if (cartItemsNames.length >= 60) {
    alert("No se pueden agregar más de 60 productos al carrito");
    return;
  }

  addProductToCart(title, price, productImg);
  updatetotal();
}



function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }

  total = Math.round(total * 100) / 100;

  document.getElementsByClassName('total-price')[0].innerText = "$" + total;
}

// Obtén todos los elementos con la clase 'add-cart'
var addToCartButtons = document.querySelectorAll('.add-cart');

// Recorre cada botón de agregar al carrito y agrega un evento de clic
for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener('click', addToCartClicked);
}

// Función que se ejecuta cuando se hace clic en el botón de agregar al carrito
function addToCartClicked(event) {
  var button = event.target;
  var product = button.parentElement;
  var title = product.querySelector('.product-title').innerText;
  var price = product.querySelector('.price').innerText;
  var productImg = product.querySelector('.product-img').src;
  var productId = button.dataset.productId; // Obtiene el ID del producto

  addProductToCart(title, price, productImg, productId);
}

// Función para agregar un producto al carrito
function addProductToCart(title, price, productImg, productId) {
  var cartItems = document.querySelector('.cart-content');

  // Verifica si el producto ya está en el carrito
  var cartItem = cartItems.querySelector(`[data-product-id="${productId}"]`);
  if (cartItem) {
    alert("Ya se ha agregado este artículo al carrito");
    return;
  }

  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');
  cartShopBox.setAttribute('data-product-id', productId); // Asigna el ID del producto al elemento del carrito

  var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-quantity">
    </div>
    <i class='bx bxs-trash-alt cart-remove'></i>
  `;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.appendChild(cartShopBox);

  // Asigna los eventos para eliminar y cambiar la cantidad del producto en el carrito
  cartShopBox.querySelector('.cart-remove').addEventListener('click', removeCartItem);
  cartShopBox.querySelector('.cart-quantity').addEventListener('change', quantityChanged);

  updatetotal();
}

