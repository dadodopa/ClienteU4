export function mostrarNumeroElementos(array) {
    return array.length();
}
export function mostrarElementos(array, id) {
    array.forEach((element) => {
        document.getElementById(id).innerHTML = `${element}`;
    });
}
export function mostrarElementosReves(array, id) {
    array.reverse();
    array.forEach(element => {
        document.getElementById(id).innerHTML = `${element}`
    });
}
export function mostrarElementosAlfabeticamente(array, id) {
    array.sort();
    array.forEach(element => {
        document.getElementById(id).innerHTML = `${element}`
    });
}