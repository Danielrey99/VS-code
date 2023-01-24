window.onload = iniciar;//asociamos la funcion iniciar cuando el documento estea cargado

function iniciar() {
    document.getElementById("btnReservar").addEventListener('click', validar);
}

//Ejercicio 1
function validaNombre() {
    var nombre = document.getElementById("txtNombre");//obtenemos el elemento
    if (nombre.value.includes(" ") || nombre.value == "") {//comprobamos que no tiene espacios y no esta vacio
        var diverror = document.getElementById("errores");//obtenemos el div de los errores
        diverror.innerHTML += "<li>El nombre es obligatorio y no puede contener espacios</li>";//escribimos el error
        return false;
    }
    return true;
}
//Ejercicio 2
function validaMatricula() {
    var matricula = document.getElementById("txtMatricula");//obtenemos el elemento
    //comprobamos que no tiene espacios, no está vacio, la longitud y que sean los caracteres correctos
    if (matricula.value.includes(" ") || matricula.value == "" || matricula.value.length != 7 || isNaN(matricula.value.substring(0, 4)) || !matricula.value.substring(4, 7).match(/[A-Z]/i) || matricula.value == matricula.value.toLowerCase()) {
        var diverror = document.getElementById("errores");//obtenemos el div de los errores
        diverror.innerHTML += "<li> Debe contener 4 cifras seguidas de 3 letras mayúsculas.</li>";//escribimos el error
        return false;
    }
    return true;
}
//Ejercicio 3
function validaTelefono() {
    var telf = document.getElementById("txtTelf");//obtenemos el elemento
    //Comprobamos que sea un numero y que tenga una longitud de 9 o 12 si usa prefijo
    if (telf.value.length == 9 && !isNaN(telf.value) || telf.value.length == 12 && telf.value.substring(0, 1) == "+" && !isNaN(telf.value.substring(1, 12))) {//comprobamos que tiene la longitud adecuada
        return true;
    }
    var diverror = document.getElementById("errores");//obtenemos el div de los errores
    diverror.innerHTML += "<p>Debe introducir un número de teléfono de 9 cifras o 12 si es con el prefijo</p>";//escribimos el error
    return false;

}
//Ejercicio 4
function validar(e) {//comprobamos que se cumplen las validaciones
    if (validaNombre() && validaMatricula() && validaTelefono() && confirm("Deseas enviar el formulario?")) {
        //obtenemos información
        var plaza = document.getElementById("plazas").value;
        var nombre = document.getElementById("txtNombre").value;
        var telefono = document.getElementById("txtTelf").value;
        var matricula = document.getElementById("txtMatricula").value;
        var tarifas = document.getElementsByName("tarifa");
        var tarifa;

        for (var t of tarifas) {//recorremos las opciones del radio button y seleccionamos la que estea checked
            if (t.checked) {
                tarifa = t.value;
            }
        }
        //alamacenamos datos en el navegador
        localStorage.setItem("plaza", plaza);
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("telefono", telefono);
        localStorage.setItem("matricula", matricula);
        localStorage.setItem("tarifa", tarifa);
        return true;
    } else {//Si hay algun error se habilita el elemento errores
        document.getElementById("errores").removeAttribute("hidden");
        e.preventDefault();
        return false;
    }
}


