window.onload = function () {
    alert("La página ha cargado correctamente");
    //Ej 1
    document.getElementById("btnColor").onclick = cambiarColor; //¡¡Sin paréntesis!!
    //Ej 2
    document.getElementById("heaCumbres").addEventListener("click", cumbresPlaneta);
    //Ej 3
    document.getElementById("btnAnadir").addEventListener("click", actualizaLista);//añadir elemento
    document.getElementById("btnBorrar").addEventListener("click", borraLista);//borrar elemento
    //Ej 4
    document.getElementById("txtEuro").addEventListener("keyup", cambioDolares);//conversion de euro a dolar
    document.getElementById("txtDolar").addEventListener("keyup", cambioEuros);//conversion de dolar a euro
}

/*Ejercicio 1*/
function cambiarColor() {
    //obtenemos el contenedor section por la clase y seleccionamos la primera posición
    const parentDOM = document.getElementsByClassName("sol1")[0];
    //obtenemos los span dentro de section por la clase
    const spanList = parentDOM.getElementsByClassName("color_submarino");
    console.log(spanList);

    var color = document.getElementById('txtColor').value;

    if (color == "red" || color == "rojo" || color == "yellow" || color == "amarillo" ||
        color == "green" || color == "verde" || color == "blue" || color == "azul") {//comprobamos si escribe el español/inlges

        if (color == "red" || color == "rojo") {
            for (i = 0; i < spanList.length; i++) {//recoremos los span y cambiamos el color
                spanList[i].style.color = "red";
            }
        }
        if (color == "yellow" || color == "amarillo") {
            for (i = 0; i < spanList.length; i++) {
                spanList[i].style.color = "yellow";
            }
        }
        if (color == "green" || color == "verde") {
            for (i = 0; i < spanList.length; i++) {
                spanList[i].style.color = "green";
            }
        }
        if (color == "blue" || color == "azul") {
            for (i = 0; i < spanList.length; i++) {
                spanList[i].style.color = "blue";
            }
        }

    } else {
        alert("Color no soportado.");
    }
}

/*Ejercicio 2*/
function cumbresPlaneta() {
    var contDiv = document.getElementById("cumbres");//obtenemos el elemento contenedor de la tabla
    var tabla = document.createElement("table");//creamos la tabla
    contDiv.appendChild(tabla);//añadimos la tabla como hijo del div

    var encabezadoTabla = document.createElement("tr");//creamos primera fila
    tabla.appendChild(encabezadoTabla);

    var nombre = document.createElement("td");//Primer elemento de la fila
    var nombreTxt = document.createTextNode("Nombre");//Texto primer elemento
    nombre.appendChild(nombreTxt);
    encabezadoTabla.appendChild(nombre);

    var altura = document.createElement("td");//Segundo elemento de la fila
    var alturaTxt = document.createTextNode("Altura");
    altura.appendChild(alturaTxt);
    encabezadoTabla.appendChild(altura);

    var pais = document.createElement("td");//Tercer elemento de la fila
    var paisTxt = document.createTextNode("País");
    pais.appendChild(paisTxt);
    encabezadoTabla.appendChild(pais);

    for (i = 0; i < cumbres.length; i++) {
        var filaTabla = document.createElement("tr");//creamos una fila por objeto
        tabla.appendChild(filaTabla);
        for (let clave in cumbres[i]) {
            console.log(cumbres[i][clave]);
            var contAtributo = document.createElement("td");//creamos una celda por atributo
            var txtAtributo = document.createTextNode(cumbres[i][clave]);//
            contAtributo.appendChild(txtAtributo);
            filaTabla.appendChild(contAtributo);
        }
    }
    document.getElementById("heaCumbres").removeEventListener("click", cumbresPlaneta);
}

/*Ejercicio 3*/
function actualizaLista() {
    var inputtxt = document.getElementById("txtAnadir").value;//obtenemos valor del input
    var nodotxt = document.createTextNode(inputtxt);//creamos el nodo de texto con el valor del imput

    if (inputtxt != "") {
        var nuevaLista = document.createElement("li");//creamos el contenedor para el texto del input
        var contLista = document.getElementById("listaActividades");//obtenemos el contenedor de la lista
        contLista.appendChild(nuevaLista);
        nuevaLista.appendChild(nodotxt);
    }
}
function borraLista() {
    var inputborrar = document.getElementById("txtBorrar").value;//obtenemos valor del input
    var contLista = document.getElementById("listaActividades");//obtenemos el contenedor de la lista
    var arrayLista = contLista.getElementsByTagName("li");//obtenemos una array(lista) de la lista

    for (i = 0; i < arrayLista.length; i++) {
        if (arrayLista[i].textContent == inputborrar) {
            contLista.removeChild(arrayLista[i]);//al borrar un elemento el siguiente pasa a ocupar su posicion
            i--//vuelve a comprovar la misma posicion por si hay 2 textos iguales seguidos.
        }
    }
}

/*Ejercicio 4*/
function cambioDolares() {
    var euros = document.getElementById("txtEuro").value;//obtenemos valor del input
    if (isNaN(euros)) {
        alert("El valor intoducido no es un numero");
    } else {
        var conversion = euros * 1.12;//guardamos la conversion
        var conversion2decimales = conversion.toFixed(2);//ajustamos los decimales
        document.getElementById("txtDolar").value = conversion2decimales;//cambiamos el valor en el input dolar
    }
}
function cambioEuros() {
    var dolares = document.getElementById("txtDolar").value;//obtenemos valor del input
    if (isNaN(dolares)) {
        alert("El valor intoducido no es un numero");
    } else {
        var conversion = dolares / 1.12;//guardamos la conversion
        var conversion2decimales = conversion.toFixed(2);//ajustamos los decimales
        document.getElementById("txtEuro").value = conversion2decimales;//cambiamos el valor en el input euro
    }
}