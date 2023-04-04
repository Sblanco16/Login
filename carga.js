let tabla = [
    { identificacion: "1002198275", nombre1: "Pedro", nombre2: "Luis", apellido1: "Garcia", apellido2: "Gomez", edad: "30", direccion: "calle 30", correo: "pedro_garcia@gmail.com" },
    { identificacion: "1908767589", nombre1: "Juan", nombre2: "Daniel", apellido1: "Morelo", apellido2: "Lopez", edad: "22", direccion: "calle 40", correo: "Juan_Morelo@gmail.com" },
    { identificacion: "2667894013", nombre1: "Ana", nombre2: "Maria", apellido1: "Hernandez", apellido2: "Cañate", edad: "28", direccion: "calle 50", correo: "Ana_Hernandez@gmail.com" },
];

let cuerpotabla = document.getElementById("tabla-usuario")
function listar() {
    let listado = "";

    for (let index = 0; index < tabla.length; index++) {
        listado += `<tr>
    <th scope="row">${tabla[index].identificacion}</th>
    <td>${tabla[index].nombre1}</td>
    <td>${tabla[index].nombre2}</td>
    <td>${tabla[index].apellido1}</td>
    <td>${tabla[index].apellido2}</td>
    <td>${tabla[index].edad}</td>
    <td>${tabla[index].direccion}</td>
    <td>${tabla[index].correo}</td>
    </tr>`
    }
    cuerpotabla.innerHTML = listado
}

function nuevo() {
    let cedula = document.getElementById("cedula").value;
    let nombre1 = document.getElementById("nombre").value;
    let nombre2 = document.getElementById("nombre2").value;
    let apellido1 = document.getElementById("apellido").value;
    let apellido2 = document.getElementById("apellido2").value;
    let edad = document.getElementById("edad").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;

    if (cedula == "" || nombre1 == "" || nombre2 == "" || apellido1 == "" || apellido2 == "" || edad == "" || direccion == "" || correo == "") {
        swal.fire({
            title: "Error!",
            text: "Por favor rectifique haber llenado todos los campos.",
            icon: "error",
            allowDutsideClick: true,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true

        });
    } else if (validarcc(cedula)) {
        swal.fire({
            title: "Error!",
            text: "La cédula " +cedula+ " ya se encuentra registrada.",
            icon: "error",
            allowDutsideClick: true,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true

        });}else{

        cuerpotabla.innerHTML += `<tr>
        <th scope="row">${cedula}</th>
        <td>${nombre1}</td>
        <td>${nombre2}</td>
        <td>${apellido1}</td>
        <td>${apellido2}</td>
        <td>${edad}</td>
        <td>${direccion}</td>
        <td>${correo}</td>
        </tr>`


        let nuevo = {
            identificacion: cedula,
            nombre1: nombre1,
            nombre2: nombre2,
            apellido1: apellido1,
            apellido2: apellido2,
            edad: edad,
            direccion: direccion,
            correo: correo
        }

        Swal.fire(
            'Registro exitoso!',
            'El usuario se ha registrado correctamente.',
            'success'
          )

        tabla.push(nuevo)
    }
}

function validarcc(cedula) {
    for (let index = 0; index < tabla.length; index++) {
        if (tabla[index].identificacion == cedula) {
            return true;
        }
    }
    return false;
}

function Limpiar_Campos(){
    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("nombre2").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("apellido2").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("correo").value = "";
}