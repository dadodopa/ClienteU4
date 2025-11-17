const convocatorias = [];
function jugadoresComunes(convocatorias) {
    let comunes = new Set(convocatorias[0].split(","));

    for (let i = 1; i < convocatorias.length; i++) {
        const partido = new Set(convocatorias[i].split(","));
        comunes = new Set(
            [...comunes].filter((jugador) => partido.has(jugador.trim()))
        );
    }

    return [...comunes];
}

document
    .getElementById("addConvocatoria")
    .addEventListener("click", function () {
        const entrada = document.getElementById("entrada").value.trim();
        if (entrada === "") return;

        convocatorias.push(entrada);

        const li = document.createElement("li");
        li.textContent = entrada;
        document.getElementById("listaConvocatorias").appendChild(li);

        document.getElementById("entrada").value = "";
    });

document.getElementById("showConvocados").addEventListener("click", function () {
    if (convocatorias.length < 2) {
        document.getElementById("resultado").textContent =
            "Introduce al menos dos convocatorias.";
        return;
    }

    const resultado = jugadoresComunes(convocatorias);
    document.getElementById("resultado").textContent =
        "Convocados en todos los partidos: " + resultado.join(", ");
});
