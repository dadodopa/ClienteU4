class Client {
    constructor(name, locality, share) {
        this.name = name;
        this.locality = locality;
        this.share = share;
    }
}

let clients = [
    new Client("Laura", "Santander", 50),
    new Client("Álvaro", "Castro", 50),
    new Client("Igor", "Castro", 60),
    new Client("Ivan", "Santander", 40),
    new Client("Mónica", "Zamora", 30),
    new Client("Javi", "Bilbao", 30),
    new Client("David", "Bilbao", 50),
];

document.getElementById("showAllClients").addEventListener("click", () => {
    let html =
        "<table border='1'><tr><th>Nombre</th><th>Localidad</th><th>Cuota</th></tr>";

    clients.forEach((c) => {
        html += `<tr><td>${c.name}</td><td>${c.locality}</td><td>${c.share}</td></tr>`;
    });

    html += "</table>";
    document.getElementById("resultado").innerHTML = html;
});
document.getElementById("localityClients").addEventListener("click", () => {
    let locality = prompt("Introduce la localidad:");
    let html =
        "<table border='1'><tr><th>Nombre</th><th>Localidad</th><th>Cuota</th></tr>";
    clients.forEach((c) => {
        if (locality == c.locality)
            html += `<tr><td>${c.name}</td><td>${c.locality}</td><td>${c.share}</td></tr>`;
    });
    html += "</table>";
    document.getElementById("resultado").innerHTML = html;
});
document.getElementById("shareClients").addEventListener("click", function () {
    let share = prompt("Introduce la cuota para visualizar los clientes con con la cuota mayor al número introducido");

    let html =
        "<table border='1'><tr><th>Nombre</th><th>Localidad</th><th>Cuota</th></tr>";
    clients.forEach((c) => {
        if (share<c.share) {
            html += `<tr><td>${c.name}</td><td>${c.locality}</td><td>${c.share}</td></tr>`;
        }
    });
    html += "</table>";
    document.getElementById("resultado").innerHTML= html;
})
