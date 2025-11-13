import * as operarArray from "./Arrays.js";
let arrayPaises = ["España", "Alemania", "Portugal", "Argentina", "Rusia"];

document
    .getElementById("showNumberofCountries")
    .addEventListener("click", function () {
        document.getElementById("resultado").innerHTML =
            operarArray.mostrarNumeroElementos(arrayPaises);
    });

document
    .getElementById("showListCountries")
    .addEventListener("click", function () {
        document.getElementById("resultado").innerHTML =
            operarArray.mostrarElementos(arrayPaises);
    });
document.getElementById("addCountry").addEventListener("click", function () {
    let paisAnadir = prompt("Escribe un pais para añadir:");
    operarArray.anadirPrincipio(arrayPaises, paisAnadir);
});
document.getElementById("rmCountry").addEventListener("click",function () {
    operarArray.borrarPrincipio(arrayPaises);
    
});
