//* Función para mostrar
function mostrarNumeroElementos(array) {
    return array.length;
}

function mostrarElementos(array) {
    return array.toString();
}

function mostrarElementosReves(array, id) {
    [...array].reverse();
    array.forEach((element) => {
        document.getElementById(id).innerHTML = `${element}`;
    });
}
function mostrarElementosAlfabeticamente(array, id) {
    //TODO Crea una copia del array y se trabaja sobre la copia no modific el original
    [...array].sort();
    array.forEach((element) => {
        document.getElementById(id).innerHTML = `${element}`;
    });
}
function anadirPrincipio(array, element) {
    array.unshift(element);
}

function anadirFinal(array, element) {
    array.push(element);
}

function borrarPrincipio(array) {
    let aeliminar = array[0];
    array.shift();
    return aeliminar;
}
function borrarFinal(array) {
    let aeliminar = array.length - 1;
    array.pop();
    return aeliminar;
}
function elementoPosicion(array, numero) {
    return array[numero];
}
function posicionElemento(array, elemento) {
    return array.indexOf(elemento)+1;
}

export {
    mostrarNumeroElementos,
    mostrarElementos,
    anadirPrincipio,
    borrarPrincipio,
    anadirFinal,
    borrarFinal,
    elementoPosicion,
    posicionElemento,
};
