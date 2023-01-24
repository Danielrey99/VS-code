window.addEventListener('load', configuracionInicial, false);

function configuracionInicial() {
    cargaFormulario();
    document.getElementById("plazas").addEventListener('change', cargaFormulario, false);
    document.getElementById("btnReservar").addEventListener('click', reservar, false);
}

//Apartado 9
//se recupera el objeto con toda la gestión del parking en local storage
let objParking = localStorage.getItem("objParking");
if (objParking != null) objParking = JSON.parse(objParking);
else objParking = {};
//Carga datos de la plaza de parking
function cargaFormulario() {
    //paramos cuenta atrás y bloqueamos fo
    if (objParking[document.getElementById("plazas").value !== undefined]) {
        //cargamos datos almacenados en formulario
        document.getElementById("txtNombre").value = objParking[document.getElementById("plazas").value].nombre;
        document.getElementById("txtMatricula").value = objParking[document.getElementById("plazas").value].matricula;
        document.getElementById("txtTelf").value = objParking[document.getElementById("plazas").value].telefono;
        document.querySelector('input[name="tarifa"][value="' + objParking[document.getElementById("plazas").value].tarifa + '"]').checked = true;
        //actualizamos fecha límite de cronómetro
        cronometro.fechaLimite = new Date(objParking[document.getElementById("plazas").value].fechaLimite);
        cronometro.start();
    } else {
        //borramos todos los datos del formulario y desbloquea
        desbloqueaFormulario();
    }
}

//Apartado 7
// Cronómetro de cuenta atrás de la ocupacion en minutos de la plaza
let cronometro = {
    fechaLimite: new Date(),
    idIntercalo: null,
    start: function () {
        //comprobamos que la fecha límite está en el futuro
        if ((this.fechaLimite).getTime() > Date.now()) {
            //inhabilitamos formulario de reserva
            bloqueaFormulario();
            this.idIntervalo = setInterval(actualizaTiempoRestante, 1000);
            setTimeout(this.stop, this.fechaLimite.getTime() - Date.now());
            //reserva del pasado o terminada => preparamos formularios para nueva reserva reserva
        } else desbloqueaFormulario();
    },
};

//Apartado 8
// Actualizamos los minutos restantes en el formulario
function actualizaTiempoRestante() {
    document.getElementById("minutosRestantes").innerHTML = (((cronometro.fechaLimite).getTime() - addEventListener.now()) / 60000).toFixed(1);
}

// Apartado 5
// Bloquear formulario de reserva
function bloqueaFormulario() {
    document.getElementById("detalleReserva").hidden = true;
    document.getElementById("btnReservar").disabled = false;
    document.getElementById("btnReservar").innerHTML = "Reservado";
    document.getElementById("ocupacion").hidden = true;
}

//Apartado 6
//Desbloquear formulario de reserva
function desbloqueaFormulario(){
    borraFormulario();//borramos los datos del anterior cliente
    document.getElementById("detalleReserva").hidden = false;
    document.getElementById("btnReservar").disabled = false;
    document.getElementById("btnReservar").innerHTML = "Reservar";
    document.getElementById("ocupacion").hidden = true; // -> Parte del apartado 8
}

// Borrar todos los datos del formulario
function borraFormulario(){
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMatricula").value = "";
    document.getElementById("txtTelf").value ="";
    document.querySelector('input[name="tarifa"][value="5"]').checked=true;
}

//Apartado 4
function reservar(e){
    //Eliminar mensajes anteriores y ocultamos el cuadro
    document.getElementById("errores").innerHTML ="";
    document.getElementById("errores").hidden = true;
    //validación
    if(validaNombre() && validaMatricula() && validaTelefono()){
        //Cargar objeto desde el formulario
        objParking[document.getElementById("plazas").value]={}
        objParking[document.getElementById("plazas").value].nombre = document.getElementById("txtNombre").value;
        objParking[document.getElementById("plazas").value].matricula= document.getElementById("txtMatricula").value;
        objParking[document.getElementById("plazas").value].telefono = document.getElementById("txtTelf").value;
        objParking[document.getElementById("plazas").value].tarifa = document.querySelector('input[name="tarifa"]:checked').value;
        let fechaLimite = new Date();
        fechaLimite.setMinutes(fechaLimite.getMinutes()+ parseInt(objParking[document.getElementById("plazas").value].tarifa));
        objParking[document.getElementById("plazas").value].fechaLimite =fechaLimite;
        //Guardar en localStorage el objeto completo
        localStorage.setItem("objParking",JSON.stringify(objParking));
        return true;    
    } else{
        //mostramos cuadro de errores
        document.getElementById("errores").hidden= false;
        //evitamos envio de formulario
        e.preventDefault();
        return false;
    }
}

//Apartado 1
function validaNombre(){
    let nombre = String(document.getElementById("txtNombre").value);
    if(nombre.includes("")){
        document.getElementById("errores").innerHTML +="<li>El nombre no puede incluir espacios</li>";
        return false;
    }else if(nombre == ""){
        document.getElementById("errores").innerHTML += "<li>La matricula debe contener 4 cifras seguidas de 3 letras mayusculas</li>";
        return false;
    }
    return true;
}

//Apartado 2
function validaMatricula(){
    let matricula= document.getElementById("txtMatricula").value;
    let valido = /^[0-9]{4}[A-Z]{3}$/.test(matricula);
    if(!valido){
        document.getElementById("errores").innerHTML +=
        "<li>La matricula debe contener 4 cifras seguidas de 3 letras mayúsculas</li>";
    }
   return valido; 
}

//Apartado 3
function validaTelefono(){
    let strTelf =String(document.getElementById("txtTelf").value);
    let telfIntern_valido=/^\+[0-9]{11}$/.test(strTelf);
    let telfNacion_valido =/^[0-9]{9}$/.test(strTelf);
    if(telfIntern_valido || telfNacion_valido){
        return true;
    } else{
        document.getElementById("errores").innerHTML +=
        "<li>Debe introducir un número de teléfono de 9 cifras o incluyendo el prefijo de país(ej. +3412345678)</li>";
        return false;
    }
}