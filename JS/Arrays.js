//* Función para mostrar 
export function mostrarNumeroElementos(array) {
    return array.length();
}
export function mostrarElementos(array, id) {
    array.forEach((element) => {
        document.getElementById(id).innerHTML = `${element}`;
    });
}
export function mostrarElementosReves(array, id) {
    [...array].reverse();
    array.forEach(element => {
        document.getElementById(id).innerHTML = `${element}`
    });
}
export function mostrarElementosAlfabeticamente(array, id) {
//TODO Crea una copia del array y se trabaja sobre la copia no modific el original
    [...array].sort();
    array.forEach(element => {
        document.getElementById(id).innerHTML = `${element}`
    });
}
export function anadirPrincipio(array, element) {
    array.unshift(element);
}

export function anadirFinal(array, element) {
    array.push(element);
}

export function borrarPrincipio(array) {
    let aeliminar= array[0];
    array.shift();
    return aeliminar;
}
export function borrarFinal(array) {
    let aeliminar=array.length-1;
    array.pop();
    return aeliminar;
}
export function elementoPosicion(array,numero) {
    return array[numero];
}
export function posicionElemento(array,elemento) {
    forEach
}

export{mostrarNumeroElementos}