// Obtener elementos del DOM
const gamesContainer = document.getElementById("gamesContainer");
const itemCountElement = document.getElementById("itemCount");
const totalAmountElement = document.getElementById("totalAmount");
const clearCartBtn = document.getElementById("clearCartBtn");

class Game {
  constructor(name, price, category, image) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.image = image;
  }
}

let games = [
  new Game("Grand Theft Auto VI", 60, "Action", "./img/imagen1.jpg"),
  new Game("Red Dead Redemption 2", 30, "Action", "./img/imagen2.jpg"),
  new Game("Sims 4", 15, "Family", "./img/imagen3.jpg"),
  new Game("Need For Speed", 10, "Cars", "./img/imagen4.jpg")
];


let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];


function updateCartUI() {

  itemCountElement.textContent = shoppingCart.length;

  const totalAmount = shoppingCart.reduce((total, game) => total + game.price, 0);
  totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;

  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}


function addToCart(game) {

  shoppingCart.push(game);

  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

  updateCartUI();
}

function removeFromCart(game) {

  const gameIndex = shoppingCart.findIndex(cartGame => cartGame.name === game.name);

  if (gameIndex !== -1) {

    shoppingCart.splice(gameIndex, 1);

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

    updateCartUI();
  }
}

function clearCart() {

  shoppingCart = [];

  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

  updateCartUI();
}


games.forEach(game => {

  const gameCard = document.createElement("div");
  gameCard.classList.add("card");
  gameCard.innerHTML = `
    <div class="imageContainer">
      <img class="image" src="${game.image}" alt="${game.name} Image">
    </div>
    <h2>${game.name}</h2>
    <h3>Precio: $${game.price}</h3>
    <h3>Categoría: ${game.category}</h3>
    <button class="addToCartBtn btn">Agregar al carrito</button>
    <button class="removeFromCartBtn btn">Eliminar del carrito</button>
  `;

  gamesContainer.appendChild(gameCard);


  const addToCartBtn = gameCard.querySelector(".addToCartBtn");
  addToCartBtn.addEventListener("click", () => addToCart(game));

  const removeFromCartBtn = gameCard.querySelector(".removeFromCartBtn");
  removeFromCartBtn.addEventListener("click", () => removeFromCart(game));
});

clearCartBtn.addEventListener("click", clearCart);

updateCartUI();
