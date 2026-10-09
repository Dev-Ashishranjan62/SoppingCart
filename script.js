const products = [
  { id: 1, name: "product 1", price: 29.9999 },
  { id: 2, name: "product 2", price: 19.9999 },
  { id: 3, name: "product 3", price: 69.9999 },
];
const cart = [];
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const emptyCartMessage = document.getElementById("empty-cart");
const CartTotalMessage = document.getElementById("cart-total");
const totalPriceDisplay = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");

products.forEach((product) => {
  const divElement = document.createElement("div");
  divElement.classList.add("product");
  divElement.innerHTML = `
     <span> ${product.name} -      ${product.price} </span>
     <button data-id = ${product.id}> Add </button>
  `;
  productList.appendChild(divElement);
});

productList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find((p) => p.id === productId);

    addToCart(product);
  }
});

function addToCart(product) {
  cart.push(product);
  console.log(cart);
  render(product);
}
function render(product) {
  let totalPrice = 0;
  // if (cart.length > 0) {
  //   // emptyCartMessage.classList.add("hidden");
  //   // CartTotalMessage.classList.remove("hidden");
  //   emptyCartMessage.hidden = false;
  //   CartTotalMessage.hidden = false;

  cartItems.innerHTML = "";
  cart.forEach((item) => {
    totalPrice += item.price;

    const div = document.createElement("div");
    div.innerHTML = `
    
       <span> ${item.name} -  ${item.price} </span>
       <button class="delete-btn" data-id = ${item.id}> remove </button>
    `;

    cartItems.appendChild(div);
    totalPriceDisplay.textContent = item.price;
  });
}
cartItems.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const productId = parseInt(e.target.dataset.id);
    const index = cart.find((p) => p.id === productId);

    if (index != -1) {
      cart.splice(index, 1);
      render();
    }

    console.log(index);
  }
});

checkoutBtn.addEventListener("click", () => {
  cart.length = 0;
  alert("checkout successfully");
  render();
});
