import * as operarArray from "./Arrays.js";
let arrayPaises = ["España", "Alemania", "Portugal", "Argentina", "Rusia"];
//Enseñar el número de Paises
document
    .getElementById("showNumberofCountries")
    .addEventListener("click", function () {
        document.getElementById("resultado").innerHTML =
            operarArray.mostrarNumeroElementos(arrayPaises);
    });
//Enseñar el contenido el array
document
    .getElementById("showListCountries")
    .addEventListener("click", function () {
        document.getElementById("resultado").innerHTML =
            operarArray.mostrarElementos(arrayPaises);
    });
// Añadir al principoi
document
    .getElementById("addCountryPrinciple")
    .addEventListener("click", function () {
        let paisAnadir = prompt("Escribe un pais para añadir al principio:");
        operarArray.anadirPrincipio(arrayPaises, paisAnadir);
        document.getElementById("resultado").innerHTML =
            operarArray.mostrarElementos(arrayPaises);
    });
//Añadir al final
document.getElementById("addCountryEnd").addEventListener("click", function () {
    let paisAnadir = prompt("Escribe un pais para añadir al final:");
    operarArray.anadirFinal(arrayPaises, paisAnadir);
    document.getElementById("resultado").innerHTML =
        operarArray.mostrarElementos(arrayPaises);
});

//Eliminar al final
document.getElementById("rmCountryEnd").addEventListener("click", function () {
    operarArray.borrarFinal(arrayPaises);
    document.getElementById("resultado").innerHTML =
        operarArray.mostrarElementos(arrayPaises);
});

//Eliminar al principio
document
    .getElementById("rmCountryPrinciple")
    .addEventListener("click", function () {
        operarArray.borrarPrincipio(arrayPaises);
        document.getElementById("resultado").innerHTML =
            operarArray.mostrarElementos(arrayPaises);
    });

// Consultar país posición
document
    .getElementById("consultCountryNumber")
    .addEventListener("click", function () {
        let posicion = prompt(
            "Añade el número de posicion que quieres saber el país"
        )-1;
        if (posicion > arrayPaises.length) {
            document.getElementById(
                "resultado"
            ).innerHTML = `La lista solo tiene ${arrayPaises.length} paises`;
        } else {
            let elemento = operarArray.elementoPosicion(arrayPaises, posicion);
            document.getElementById(
                "resultado"
            ).innerHTML = `En la posición ${posicion+1} está el país ${elemento}`;
        }
    });

// Consultar país Nombre
document
    .getElementById("consultCountryText")
    .addEventListener("click", function () {
        let nameCountry = prompt("Introduce el nombre del país a buscar");
        let pais = operarArray.posicionElemento(arrayPaises, nameCountry);
        if (pais != false) {
            document.getElementById(
                "resultado"
            ).innerHTML = `El país introducido se encuentra en la posición ${pais}`;
        } else document.getElementById("resultado").innerHTML = `El país ${nameCountry} no se encuentra en la lista`;
    });
