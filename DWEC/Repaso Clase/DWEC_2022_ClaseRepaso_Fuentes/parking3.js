window.onload = iniciar;//asociamos la funcion iniciar cuando el documento estea cargado

function iniciar() {
    cargaFormulario();
    document.getElementById("plazas").addEventListener('change', cargaFormulario, false);
    document.getElementById("btnReservar").addEventListener('click', validar, false);
}

//Apartado 9
//se recupera el objeto con toda la gestión del parking en local storage
var objParking = localStorage.getItem("objParking");
if (objParking != null) objParking = JSON.parse(objParking);
else objParking = {};
function cargaFormulario() {
    console.log(objParking[document.getElementById("plazas").value]);
    if(objParking[document.getElementById("plazas").value] !== undefined){
        cronometro();
    }else{
        desbloqueaFormulario();
    }
}

//Apartado 7
//Cronometro
function cronometro() {
    var interval = setInterval(contador, 1000);//Ejecuta el codigo cada segundo
    var seg = 0;
    var min = 0;
    var fechaActual = new Date();
    var fechaCompra = new Date(objParking[document.getElementById("plazas").value].fecha);
    var resta = fechaActual.getTime() - fechaCompra.getTime();//Obtenemos la diferencia entre la fecha actual y la fecha de compra
    var minPasados = Math.round(resta / (1000 * 60));//pasamos a minutos
    var tiempoRestante = objParking[document.getElementById("plazas").value].tarifa - minPasados;//Restamos los minutos pasados al tiempo reservado.
    bloqueaFormulario();
    document.getElementById("ocupacion").hidden = false;
    function contador() {
        if (min>=tiempoRestante) {//si ya paso el tiempo
            clearInterval(interval);//elimina intervalo
            desbloqueaFormulario();
            document.getElementById("ocupacion").hidden = true;//Apartado 8
        }
        seg += 1;
        if (seg == 60) {
            min += 1;
            seg = 0;
        }
        document.getElementById("temporizador").innerHTML = "min:" + min + " seg:" + seg;//Apartado 8
    }
}

//Apartado 6
//Desbloquear formulario de reserva
function desbloqueaFormulario() {
    borraFormulario();//borramos los datos del anterior cliente
    document.getElementById("detalleReserva").hidden = false;
    document.getElementById("btnReservar").disabled = false;
    document.getElementById("btnReservar").innerHTML = "Reservar";
    document.getElementById("ocupacion").hidden = true; // -> Parte del apartado 8
}
// Borrar todos los datos del formulario
function borraFormulario() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMatricula").value = "";
    document.getElementById("txtTelf").value = "";
    document.querySelector('input[name="tarifa"][value="5"]').checked = true;
}

// Apartado 5
// Bloquear formulario de reserva
function bloqueaFormulario() {
    document.getElementById("detalleReserva").hidden = true;
    document.getElementById("btnReservar").disabled = true;
    document.getElementById("btnReservar").innerHTML = "Reservado";
    document.getElementById("ocupacion").hidden = true;
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
        diverror.innerHTML += "<li>La matricula debe contener 4 cifras seguidas de 3 letras mayúsculas.</li>";//escribimos el error
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
function validar(e) {
    //Eliminar mensajes anteriores y ocultamos el cuadro
    document.getElementById("errores").innerHTML = "";
    document.getElementById("errores").hidden = true;

    //comprobamos que se cumplen las validaciones
    if (validaNombre() && validaMatricula() && validaTelefono() && confirm("Deseas enviar el formulario?")) {
        //Creamos el objeto con una key que sea la plaza
        objParking[document.getElementById("plazas").value] = {}
        objParking[document.getElementById("plazas").value].nombre = document.getElementById("txtNombre").value;
        objParking[document.getElementById("plazas").value].matricula = document.getElementById("txtMatricula").value;
        objParking[document.getElementById("plazas").value].telefono = document.getElementById("txtTelf").value;
        objParking[document.getElementById("plazas").value].tarifa = document.querySelector('input[name="tarifa"]:checked').value;
        var fecha = new Date();//creamos fecha en la que se hace la reserva
        objParking[document.getElementById("plazas").value].fecha = fecha;
        //Guardar en localStorage el objeto completo
        localStorage.setItem("objParking", JSON.stringify(objParking));
        return true;
    } else {//Si hay algun error se habilita el elemento errores
        document.getElementById("errores").removeAttribute("hidden");
        e.preventDefault();
        return false;
    }
}