/*Define una función que muestre información sobre una cadena de texto que se le pasa como argumento:*/
//a) determina si usa mayusculas, minúsculas o una combinación de ambas
//b)determina si es un palíndromo
function cadena() {
    var cadena = prompt("Escriba una cadena detexto");
    var cadenaSinEspacios = cadena.split(' ').join('');

    if (cadenaSinEspacios == cadenaSinEspacios.toLowerCase()) {
        alert("minusculas");
    }
    else if (cadenaSinEspacios == cadenaSinEspacios.toUpperCase()) {
        alert("mayusculas");
    }
    else {
        alert("combinación de mayusculas y minusculas");
    }

    var cadenaReversa = cadenaSinEspacios.split('').reverse().join('');
    if (cadenaReversa.toLowerCase() == cadenaSinEspacios.toLowerCase()) {
        alert("Es un palindromo");
    }
}


/*Crea una función que pida una palabra al usuario y utilizando un bucle for y el método
charAt, muestre cada una de las letras que componen la entrada.*/
function deletrear() {
    var palabra = prompt("Escribe una palabra");
    for (i = 0; i < palabra.length; i++) {
        document.write("Letra " + (i + 1) + " es: " + palabra[i] + "<br>");
    }
}

/*Introduce un número positivo de uno o dos dígitos (1..99) y haz que se muestre un mensaje
que indique si el número tiene uno o dos dígitos.*/
function numDig(){
    var digito=parseInt(prompt("introduce un digito positivo"));
    if(digito<100 && digito>=0){
        if(digito<100 && digito>9){
            alert("2 digitos");
        }
        else{
            alert("1 digito");
        }
    }

}

/*Desarrolla un programa que te permita cargar 5 enteros en una cadena de texto separadas
por comas y luego informar de cuántos valores son pares y cuántos impares. Usa un array.*/
function parImpar(){
    var numero=prompt("Introduzca numeros separados por comas");
    var arrayNum=numero.split(',');
    var contpar=0;
    var contimpar=0;
    for(i=0;i<arrayNum.length;i++){
        if(arrayNum[i]%2==0){
            contpar +=1;
        }
        else{
            contimpar +=1;
        }
    }
    alert("Par: "+contpar+" Impar: "+contimpar);
}