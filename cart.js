let cart = [];

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    let product = button.parentElement;
    let item = {
      name: product.getAttribute("data-name"),
      price: product.getAttribute("data-price"),
      img: product.getAttribute("data-img")
    };
    
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(item.name + " added to cart 🛒");
  });
});
