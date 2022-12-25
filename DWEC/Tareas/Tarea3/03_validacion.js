window.onload = iniciar;//asociamos la funcion iniciar cuando el documento estea cargado

function iniciar() {//añadimos el evento onclick al boton
    document.getElementById("btnEnviar").addEventListener('click', validar);
    document.getElementById("txtNombre").addEventListener('blur', mayusculas);//el evento blur se activa al perder el foco
    document.getElementById("btnEnviar").disabled=true;//deshabilitamos el btn enviar
    document.getElementById("chkPrivacidad").addEventListener('click', activarBtn);//habilitamos o deshabilitamos el btn enviar
}

//Contar los errores para almacenar en la coockie
var contError=0;
//creamos la cookie
document.cookie="intentos=0; expires=Thu, 31 Dec 2020 12:00 UTC; path=/";

//validacion
function validaNombre() {
    var nombre = document.getElementById("txtNombre");
    if(nombre.value.includes(" ") || nombre.value == ""){//comprobamos que no tiene espacios y no esta vacio
        var diverror = document.getElementById("errores");//obtenemos el div de los errores
        diverror.innerHTML+="<p>El nombre es obligatorio y no puede contener espacios</p>";//escribimos el error
        contError+=1;
        return false;
    }
    return true;
}
function validaEdad(){
    var edad = document.getElementById("txtEdad");
    if(edad.value<18 || edad.value>120 || edad.value == ""){//comprobamos que no sea menor de 18 ni mayor de 120 y no esta vacio
        var diverror = document.getElementById("errores");
        diverror.innerHTML+="<p>La edad debe estar entre 18 y 120</p>";
        contError+=1;
        return false;
    }
    return true;
}
function validaContrasenha(){
    var contrasenha1 = document.getElementById("txtPass1");
    if(contrasenha1.value.length<6 || contrasenha1.value == ""){//comprobamos que tiene minimo 6 caracteres y no está vacio
        var diverror = document.getElementById("errores");
        diverror.innerHTML+="<p>La contraseña debe contener al menos 6 caracteres</p>";
        contError+=1;
        return false;
    }
    return true;
}
function confirmaContrasenha(){
    var contrasenha1 = document.getElementById("txtPass1");
    var contrasenha2 = document.getElementById("txtPass2");
    if(contrasenha2.value != contrasenha1.value || contrasenha2.value == ""){//comprobamos que coinciden y no está vacio
        var diverror = document.getElementById("errores");
        diverror.innerHTML+="<p>Las contraseñas deben coincidir</p>";
        contError+=1;
        return false;
    }
    return true;
}
function validaNif(){
    var nif = document.getElementById("txtNIF");//usamos substring para separar los numeros de la letra
    var nifNumero = nif.value.substring(0, 8);
    var nifLetra = nif.value.substring(8, 9);
    if(nif.value.length!=9 || isNaN(nifNumero) || !nifLetra.match(/[A-Z]/i) || nifLetra==nifLetra.toLowerCase()){//comprobamos la longitud adecuada, los 8 primeros numeros y la letra(con expresion regular)
        var diverror = document.getElementById("errores");
        diverror.innerHTML+="<p>El NIF debe contener 8 números seguidos de una letra mayúscula</p>";
        contError+=1;
        return false;
    }
    return true;
}
function validaEmail(){
    var email = document.getElementById("txtEmail");
    var arrayDeCadenas = email.value.split("@");//partimos el email para obtener el dominio
    if(!email.value.includes("@") || !arrayDeCadenas[1].includes("ciclosmontecastelo.com")){//comprobamos si tiene el dominio correcto
        var diverror = document.getElementById("errores");
        diverror.innerHTML+="<p>El correo electrónico dbe pertenecer al dominio ciclosmontecastelo.com</p>";
        contError+=1;
        return false;
    }
    return true;
}
function validaGenero() {
    var generos = document.getElementsByName("genero");
    if (!generos[0].checked && !generos[1].checked) {//comprobamos que no estan los 2 sin check
        var diverror = document.getElementById("errores");
        diverror.innerHTML+="<p>Debe seleccionar un genero</p>";
        contError+=1;
        return false
    }
    return true;
}
function validaTelefono(){
    var telf = document.getElementById("txtTelf");
    if(telf.value.length!=9){//comprobamos que tiene la longitud adecuada
        var diverror = document.getElementById("errores");
        diverror.innerHTML+="<p>Debe introducir un número de teléfono de 9 cifras</p>";
        contError+=1;
        return false;
    }
    return true;
}
function validaFruta() {
    var frutas = document.getElementById("frutas");
    var contador=0;
    for(i=0;i<frutas.options.length; i++){//recorremos las opciones
        if(frutas.options[i].selected){//si estan seleccionadas actualizamos el contador
            contador +=1;
        }
    }
    if(contador>1 && contador<4){
        return true
    }else{
        var diverror = document.getElementById("errores");
        diverror.innerHTML+="<p>Debe seleccionar 2 o 3 frutas</p>";
        contError+=1;
        return false
    }
}
function activarBtn(){
    var politica = document.getElementById("chkPrivacidad");
    if(!politica.checked){//desaparece el btn al deseleccionar la politica
        document.getElementById("btnEnviar").disabled=true;
    }else{//aparece el btn al selecionar la politica
        document.getElementById("btnEnviar").disabled=false;
    }
}

function validar(e) {//comprobamos que se cumplen las validaciones
    if (validaNombre() && validaEdad() && validaContrasenha() && confirmaContrasenha() && validaNif() && validaEmail() && validaGenero() && validaTelefono() && validaFruta() && confirm("Deseas enviar el formulario?")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

//Otras funciones
function mayusculas(){//obtenemos el texto y lo cambiamos por mayusculas
    var nombre = document.getElementById("txtNombre");
    nombre.value=nombre.value.toUpperCase();
}