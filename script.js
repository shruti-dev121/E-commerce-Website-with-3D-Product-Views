// -----------------------------
// CART FUNCTIONALITY
// -----------------------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart
function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product.name + " added to cart!");
  updateCartIcon();
}

// Update cart icon count
function updateCartIcon() {
  const cartIcon = document.querySelector(".cart");
  if (cartIcon) {
    cartIcon.textContent = "🛒 (" + cart.length + ")";
  }
}

// -----------------------------
// SEARCH FUNCTIONALITY
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  updateCartIcon();

  const searchBtn = document.querySelector("header button");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const query = document.querySelector("header input").value.toLowerCase();
      filterProducts(query);
    });
  }
});

// Filter products by search
function filterProducts(query) {
  const products = document.querySelectorAll(".product-card");
  products.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// -----------------------------
// DYNAMIC PRODUCT LOADING (simulate API)
// -----------------------------
const sampleProducts = [
  { id: 1, name: "Laptop", price: 799, img: "images/laptop.jpg" },
  { id: 2, name: "Smartphone", price: 499, img: "images/phone.jpg" },
  { id: 3, name: "Headphones", price: 199, img: "images/headphones.jpg" },
];

function loadProducts() {
  const grid = document.querySelector(".product-grid");
  if (!grid) return;

  grid.innerHTML = "";
  sampleProducts.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${JSON.stringify(p).replace(/"/g, '&quot;')})">Add to Cart</button>
    `;
    grid.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", loadProducts);
