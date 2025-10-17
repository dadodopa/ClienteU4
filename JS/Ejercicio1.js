import * as operarArray from "./Arrays";
let arrayPaises = ["España", "Alemania", "Portugal", "Argentina", "Rusia"];

document.getElementById("mostrarNumeroPaises").addEventListener(
    "click",
    prompt(operarArray.mostrarNumeroElementos(arrayPaises))
);
