const arrayLetra = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
let letra = prompt("Introduce una letra para saber la que DNIs");
let posicionLetra=arrayLetra.indexOf(letra)
let arrayPosibles=[];
for (let i = 0; i < 1000; i++) {
    let moduloLetra=i%23
    if (posicionLetra==moduloLetra) {
        arrayPosibles.push(i+ +letra);
    }
}
