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

lista_personas=[

]
document
    .getElementById("enviar")
    .addEventListener("click", function () {
        let nombre= document.getElementById("registro_nombre").value;
        let apellidos= document.getElementById("registro_apellidos").value;
        let email = document.getElementById("registro_email").value;
        let password = document.getElementById("registro_password").value;
    let persona=addPersona(nombre,apellidos,email,password);
    alert("Datos de "+ persona.mostrarPersona()+" registrados correctamente")
    });

function addPersonas(nombre,apellido,email) {
    let persona= new Persona(nombre,apellido,email,"");
    lista_personas.unshift(persona)
    return persona;
}