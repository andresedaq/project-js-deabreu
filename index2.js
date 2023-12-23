const gamesContainer = document.getElementById("gamesContainer");
const clearCartButton = document.getElementById("clearCart");
clearCartButton.onclick = clearCart;

let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    gamesContainer.innerHTML = ``;

    data.forEach((juegoData) => {
      const juegoDiv = document.createElement("div");
      juegoDiv.classList.add("game__card");
      juegoDiv.innerHTML = `
                    <img class="game__image" src="${juegoData.img}">
                    <h2 class="game__title">${juegoData.name}</h2>
                    <p class="game__category">${juegoData.category}</p>
                    <p class="game__price">$${juegoData.price}</p>
                    <button class="game__button" onclick="addToCart('${juegoData.name}', ${juegoData.price})">Buy Game</button>
                    <button class="remove__button" onclick="removeFromCart('${juegoData.name}')">Remove</button>
            `;

      gamesContainer.appendChild(juegoDiv);
    });
  });

function clearCart() {
  shoppingCart = [];
  updateCartUI();
  Toastify({

    text: "El carrito ha sido vaciado",
    
    duration: 3000
    
    }).showToast();
}

function updateCartUI() {
  const itemCountElement = document.getElementById("itemCount");
  const totalAmountElement = document.getElementById("totalAmount");

  itemCountElement.textContent = shoppingCart.length;

  const totalAmount = shoppingCart.reduce(
    (total, game) => total + game.price,
    0
  );
  totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;

  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

const addToCart = (name, price) => {
  const game = { name, price };
  shoppingCart.push(game);
  updateCartUI();
  Toastify({

    text: "Juego agregado",
    
    duration: 3000,
    style: {
      background: "rgba(34, 153, 34, 0.849)",
    }
    
    }).showToast();
}


const removeFromCart = (name) => {
  const removeGame = () => {
    shoppingCart.splice(gameIndex, 1);
    updateCartUI();
    Toastify({
      text: "Juego eliminado",
      duration: 3000,
      style: {
        background: "rgba(192, 10, 10, 0.842)",
      }
    }).showToast();
  };

  const gameIndex = shoppingCart.findIndex(cartGame => cartGame.name === name);

  gameIndex !== -1 ? removeGame() : null;
}

updateCartUI();
