function header1() {
    /*Obtener texto*/
    var textarea = document.getElementById("texto").value;
    /*Crear elemento y contenido */
    var h1 = document.createElement("h1");
    var h1contenido = document.createTextNode(textarea);
    h1.appendChild(h1contenido);
    /*Añardirlo dentro del div */
    document.getElementById("resultado").appendChild(h1);

    /*Boton Eliminar*/
    var h1boton = document.createElement("input");
    h1boton.setAttribute("type", "button");
    h1boton.setAttribute("value", "Eliminar");
    /*Añadirlo al div*/
    document.getElementById("resultado").appendChild(h1boton);

    /*Funcionalidad Eliminar */
    h1boton.addEventListener('click', function (e) {
        h1.remove();
        h1boton.remove();
    });
}

function header2() {
    var textarea = document.getElementById("texto").value;

    var h2 = document.createElement("h2");
    var h2contenido = document.createTextNode(textarea);
    h2.appendChild(h2contenido);

    document.getElementById("resultado").appendChild(h2);

    /*Boton */
    var h2boton = document.createElement("input");
    h2boton.setAttribute("type", "button");
    h2boton.setAttribute("value", "Eliminar");

    document.getElementById("resultado").appendChild(h2boton);
    h2boton.addEventListener('click', function (e) {
        h2.remove();
        h2boton.remove();
    });
}

function header3(){
    var textarea = document.getElementById("texto").value;

    var h3 = document.createElement("h3");
    var h3contenido = document.createTextNode(textarea);
    h3.appendChild(h3contenido);

    document.getElementById("resultado").appendChild(h3);

    /*Boton */
    var h3boton = document.createElement("input");
    h3boton.setAttribute("type", "button");
    h3boton.setAttribute("value", "Eliminar");

    document.getElementById("resultado").appendChild(h3boton);
    h3boton.addEventListener('click', function (e) {
        h3.remove();
        h3boton.remove();
    });
}

function header4(){
    var textarea = document.getElementById("texto").value;

    var h4 = document.createElement("h4");
    var h4contenido = document.createTextNode(textarea);
    h4.appendChild(h4contenido);

    document.getElementById("resultado").appendChild(h4);

    /*Boton */
    var h4boton = document.createElement("input");
    h4boton.setAttribute("type", "button");
    h4boton.setAttribute("value", "Eliminar");

    document.getElementById("resultado").appendChild(h4boton);
    h4boton.addEventListener('click', function (e) {
        h4.remove();
        h4boton.remove();
    });
}

function header5(){
    var textarea = document.getElementById("texto").value;

    var h5 = document.createElement("h5");
    var h5contenido = document.createTextNode(textarea);
    h5.appendChild(h5contenido);

    document.getElementById("resultado").appendChild(h5);

    /*Boton */
    var h5boton = document.createElement("input");
    h5boton.setAttribute("type", "button");
    h5boton.setAttribute("value", "Eliminar");

    document.getElementById("resultado").appendChild(h5boton);
    h5boton.addEventListener('click', function (e) {
        h5.remove();
        h5boton.remove();
    });
}

function header6(){
    var textarea = document.getElementById("texto").value;

    var h6 = document.createElement("h6");
    var h6contenido = document.createTextNode(textarea);
    h6.appendChild(h6contenido);

    document.getElementById("resultado").appendChild(h6);

    /*Boton */
    var h6boton = document.createElement("input");
    h6boton.setAttribute("type", "button");
    h6boton.setAttribute("value", "Eliminar");

    document.getElementById("resultado").appendChild(h6boton);
    h6boton.addEventListener('click', function (e) {
        h6.remove();
        h6boton.remove();
    });
}

function parrafo(){
    var textarea = document.getElementById("texto").value;

    var p = document.createElement("p");
    var pcontenido = document.createTextNode(textarea);
    p.appendChild(pcontenido);

    document.getElementById("resultado").appendChild(p);

    /*Boton */
    var pboton = document.createElement("input");
    pboton.setAttribute("type", "button");
    pboton.setAttribute("value", "Eliminar");

    document.getElementById("resultado").appendChild(pboton);
    pboton.addEventListener('click', function (e) {
        p.remove();
        pboton.remove();
    });
}