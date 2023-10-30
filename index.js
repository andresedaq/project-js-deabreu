// Crear algoritmo con un condicional (if)
// Crear un algoritmo utilizando usando un ciclo (for o while)
// Funciones
// Armar un simulador interactivo con la estructura de tu proyecto final

const sneakerModels = ["Air Force", "Jordans", "Converse"];

function displayWelcomeMessage() {    
    const headingPage = document.getElementById("headingPage");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const loginButton = document.getElementById("firstButton");
    firstNameInput.style.display = "none";
    lastNameInput.style.display = "none";
    loginButton.style.display = "none";
    headingPage.textContent = "Sneackery's";

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const welcomeMessage = `Hello ${firstName} ${lastName}, are you ready to get your sneakers?`;

;

    const welcomeMessageElement = document.getElementById("welcomeMessage");
    welcomeMessageElement.textContent = welcomeMessage;

    const yesButton = document.getElementById("yesButton");
    const nopeButton = document.getElementById("nopeButton");

    yesButton.style.display = "inline-block";
    nopeButton.style.display = "inline-block";
}

function respond(response) {
    const responseElement = document.getElementById("welcomeMessage");
    const colorInput = document.getElementById("colorInput");

    if (response === "Yes") {
        responseElement.textContent = "What color are you looking for?";
        colorInput.style.display = "block";

        const yesButton = document.getElementById("yesButton");
        const nopeButton = document.getElementById("nopeButton");
        yesButton.style.display = "none";
        nopeButton.style.display = "none";

        const firstNameInput = document.getElementById("firstName");
        const lastNameInput = document.getElementById("lastName");
        const loginButton = document.querySelector("button[onclick='displayWelcomeMessage']");
        firstNameInput.style.display = "none";
        lastNameInput.style.display = "none";
        loginButton.style.display = "none";
    } else {
        responseElement.textContent = `You chose: ${response}`;
    }
}

function getColorAndModels() {
    const color = document.getElementById("sneakerColor").value;
    const responseElement = document.getElementById("welcomeMessage");
    responseElement.textContent = `Great, we have these models in ${color}:`;

    const sneakerModelsElement = document.getElementById("sneakerModels");
    sneakerModelsElement.style.display = "block";

    let i = 0;
    while (i < sneakerModels.length) {
        const modelText = document.createElement("p");
        modelText.textContent = ` - ${sneakerModels[i]}`;
        sneakerModelsElement.appendChild(modelText);
        i++;
    }
}