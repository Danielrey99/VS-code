/* SINTAXIS: $(selector).accion() */

/* ESPERAR A LA CARGA DEL HTML */

$(document).ready(function () {
    //Ejercicio 1
    /*Seleccionamos los botones y le añadimos una funcion click,
    toggleClass añade una clase o la elimina si ya la tiene*/
    $("li .country").click(function () {
        $(this).toggleClass("enabled");
    });

    //Ejercicio 2
    /*Buscamos por id*/
    $("#Spain").click(function () {
        alert($(this).text());
    });
    $("#USA").click(function () {
        alert($(this).text());
    });

    //Ejercicio 3
    /*Seleccionamos el boton Europa*/
    $("#Remove").click(function () {
        /*Seleccionamos la lista de paises  y los recorremos con each*/
        $("#Europe .country").each(function (index) {
            /*Si esta activado lo eliminamos*/
            if ($(this).hasClass("enabled")) {
                $(this).remove();
            }
        });
    });
    /*Seleccionamos el boton NorthAmerica*/
    $("#remove2").click(function () {
        /*Seleccionamos la lista de paises  y los recorremos con each*/
        $("#NorthAmerica .country").each(function (index) {
            /*Si esta activado lo eliminamos*/
            if ($(this).hasClass("enabled")) {
                $(this).remove();
            }
        });
    });

    //Ejercicio 4
    /*Seleccionamos el boton*/
    $(".q").keyup(function () {
        /*Obtenemos el texto escrito en el buscador*/
        /*Usamos lowercase para que no distinga entre mayusculas y minusculas*/
        var buscar = $(".q").val().toLowerCase();
        /*Seleccionamos la lista de paises y los recorremos con each*/
        $(".country").each(function (index) {
            /*Si contiene el texto introducido muestra el elemento y si no lo elimina*/
            if ($(this).text().toLowerCase().includes(buscar)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    //Ejercicio 5 alert(paisesEuropa['result'][0]);
    /*Seleccionamos el boton*/
    $("#reload").click(function () {
        $.ajax({
            url: "http://localhost/getCountries.php",
            data: { 'continent': 'Europe' },
            type: "GET",
            success: function (respuesta) {
                /*Obtenemos la lista y los eliminamos*/
                paisesEuropa = JSON.parse(respuesta);
                $("#Europe .country").each(function (index) {
                    $(this).remove();
                });
                /*Obtenemos el elemento ul de Europa*/
                var cList = $('#Europe .countryList');
                /*recorremos el diccionario*/
                $.each(paisesEuropa['result'], function (ind, elem) {
                    /*Creamos un elemento li y lo añadimos al ul*/
                    var li = $('<li/>')
                        .addClass('country inline-block')
                        .appendTo(cList);
                    /*Creamos un elemento a y lo añadimos al li*/
                    var aaa = $('<a [href]/>')
                        .addClass('inline-block')
                        .text(elem)
                        .appendTo(li);
                });
            },
            error: function (xhr, status) {
                alert("Ha ocurrido un error " + status + "/" + xhr);
            },
        });
    });

    $("#reload2").click(function () {
        $.ajax({
            url: "http://localhost/getCountries.php",
            data: { 'continent': 'NorthAmerica' },
            type: "GET",
            success: function (respuesta) {
                /*Obtenemos la lista y los eliminamos*/
                paisesNorteAmerica = JSON.parse(respuesta);
                $("#NorthAmerica .country").each(function (index) {
                    $(this).remove();
                });
                /*Obtenemos el elemento ul de NorthAmerica*/
                var cList2 = $('#NorthAmerica .countryList');
                /*recorremos el diccionario*/
                $.each(paisesNorteAmerica['result'], function (ind, elem) {
                    /*Creamos un elemento li y lo añadimos al ul*/
                    var li = $('<li/>')
                        .addClass('country inline-block')
                        .appendTo(cList2);
                    /*Creamos un elemento a y lo añadimos al li*/
                    var aaa = $('<a/>')
                        .addClass('inline-block')
                        .text(elem)
                        .appendTo(li);
                });
            },
            error: function (xhr, status) {
                alert("Ha ocurrido un error " + status + "/" + xhr);
            },
        });
    });

});