// / SEGUNDA PRE ENTREGA
// Estructura del HTML
// Variables necesarias
// Funciones
// Objetos
// Arrays
// Metodos de busqueda y filtrado sobre el Array
// For 

// Vamos a crear un sistema que consultara:
// - Nombre del cliente.
// - Presupuesto que estaba buscando.
// - Le ofrecera un juego acorde a su presupuesto.

class Game {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

const Game1 = new Game("Grand Theft Auto VI", 60, "Action");
const Game2 = new Game("Red Dead Redemption 2", 30, "Action");
const Game3 = new Game("Sims 4", 15, "Family");
const Game4 = new Game("Need For Speed", 10, "Cars");

const userName = prompt("¡Bienvenido a GameStop! ¿Cuál es tu nombre?");
const userBudget = parseFloat(prompt("Genial " + userName + "," + " ¿Cuál es tu presupuesto?"));

let games = [Game1, Game2, Game3, Game4];
let affordableGames = games.filter(game => game.price <= userBudget);
let currentGameIndex = 0;

while (currentGameIndex < affordableGames.length) {
    const currentGame = affordableGames[currentGameIndex];
    
    const userDecision = confirm(
        "Nombre: " + currentGame.name + "\nPrecio: $" + currentGame.price + "\nCategoría: " + currentGame.category +
        "\n\n¿Quieres comprar este juego?"
    );

    if (userDecision) {
        alert("¡Genial " + userName + ", gracias por tu compra!\nDisfruta de " + currentGame.name + "!");
        break;
    } else {
        const goToPreviousGame = confirm("¿Quieres ver el juego anterior?");
        
        if (goToPreviousGame) {
            currentGameIndex = Math.max(0, currentGameIndex - 1);
        } else {
            currentGameIndex++;
        }
    }
}

if (currentGameIndex === affordableGames.length) {
    alert("Lo siento, no hay más juegos dentro de tu presupuesto. ¡Hasta luego!");
}
