class Persona {
    constructor(nombre, apellido, email, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
    }
    mostrarPersona() {
        return `${this.nombre} ${this.apellido}`;
    }
}

lista_personas = [new Persona("Daniel", "Dopazo Dominguez", "Dopazo", "1234")];

document.getElementById("enviar").addEventListener("click", function () {
    let nombre = document.getElementById("registro_nombre").value;
    let apellido = document.getElementById("registro_apellidos").value;
    let email = document.getElementById("registro_email").value;
    let password = document.getElementById("registro_password").value;
    let addPersona = new Persona(nombre, apellido, email, password);
    lista_personas.unshift(addPersona);
    alert(
        "Datos de " + addPersona.mostrarPersona() + " registrados correctamente"
    );
});
document.getElementById("buscar").addEventListener("click", () => {
    let email = prompt("Introduce la localidad:");
    lista_personas.forEach((p) => {
        if (email == p.email)
            document.getElementById("resultado").innerHTML = p.mostrarPersona();
    });
});
document.getElementById("tabla").addEventListener("click", () => {
    let html =
        "<table border='1'><tr><th>Nombre</th><th>Apellidos</th><th>Email</th></tr>";
    lista_personas.forEach((p) => {
        html += `<tr><td>${p.nombre}</td><td>${p.apellido}</td><td>${p.email}</td></tr>`;
    });
    html += "</table>";
    document.getElementById("resultado").innerHTML = html;
});
