var array;

function arraymulti() {
    array = [
        {username:"Juan",codigo:"192104", CC: "1092730511", tipoUser: "Estudiante"},
        {username:"Camilo",codigo:"192111", CC: "1095610511", tipoUser: "Docente"},
        {username:"Luna",codigo:"192544", CC: "1092597411", tipoUser: "Administrador"}
    ]

    let fecha = new Date();
    var minutos = fecha.getFullYear();
    console.log(minutos);
}

function compara() {
    var nombre = $("#nombre").val();
    for (let i=0;i<array.length;i++) {
        if (nombre==array[i].username) {
            console.log("El nombre Existe.")
        } else {
            console.log("El nombre no Existe.")
        }
    }
}

// Moment.js