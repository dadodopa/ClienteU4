let fuerza= 0;
document.getElementById("addFuerza").addEventListener("click", function () {
    fuerza++;
});

document.getElementById("showFuerza").addEventListener("click", function () {
    document.getElementById("resultado").innerHTML=`Tu fuerza es de ${fuerza}`
})