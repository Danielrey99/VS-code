alert("Hola Mundo");

//Entrada/Salida y Operaciones

/*Añade al código la funcionalidad de que cambie la cadena “Hola” de la referencia “parrafo”
por una cadena que contenga comillas simples y comillas dobles.*/
document.getElementById("parrafo").innerHTML =" \" ' ' \" ";// \" para poner comillas en string

/*Coloca en la referencia “operaciones” el resultado de todas las operaciones matemáticas
entre los datos constantes 5 y 2.*/
const num=[5,2];
document.getElementById("operaciones").innerHTML =num[0]+num[1];

/*Modifica el código para que los datos constantes sean variables y los introduzca el usuario
cliente desde el navegador.*/
function myFunction() {
	var cambioNum1= prompt("Introduzca el primer digito");
	var cambioNum2= prompt("Introduzca el segundo digito");
	document.getElementById("operaciones").innerHTML =parseInt(cambioNum1)+parseInt(cambioNum2);
}

/*Introduce código html a continuación de la cabecera que contiene la cadena “Hasta luego” y
que escriba alguna cadena en la consola.*/
document.write("<p>Esta escrito desde js</p>");

//Tareas Condicionales, Bucles y Funciones

/*Con la estructura for, crea el código que
calcule el factorial de un entero que introducimos por pantalla.*/
function factorial(){
	var numero=parseInt(prompt("Introduce el numero para calcular su factorial"));
	var resultado = numero; 
	for (i=1; i<numero; i++) {
		resultado *= numero-i;
	}

	document.getElementById("operaciones").innerHTML =resultado;
}

/*Crea el código en Javascript que imprima los múltiplos de 5 hasta 200 con while y do-while.*/
var inicio=1;
do{
	var resto= inicio%5;

	if(resto==0){
		document.write(inicio+" ");
	}

	inicio++;
}while(inicio<=200);

/*Escribe el código de una función a la que se le pasa un entero como parámetro y devuelve
una cadena de texto que indica si el número es par o impar.*/
function parImpar(numero){
	var resultado="Impar"
	if(numero%2==0){
		resultado="Par";
	}
	return resultado;
}
alert("4 es "+parImpar(4)+" 5es "+parImpar(5));

/*Haz un programa donde se introduzca la hora en el formato de 0 a 24 y el programa
responda con “Buenos días”, “Buenas tardes” y “Buenas noches”.*/
function saludar(){
	var hora=parseInt(prompt("Escriba la hora entre 0 y 24"));
	if(hora>=6 && hora<=12){
		alert("Buenos dias");
	}else if(hora>12 && hora<=19){
		alert("Buenas tardes");
	}else {
		alert("Buenas noches");
	}
}

/*Se introducen tres calificaciones de un estudiante, si el promedio es mayor o igual a siete,
se muestra el mensaje "Promocionado" .De lo contrario, debería mostrar “Repetir” en la
pantalla.*/
function calificaciones(){
	var nota1=parseInt(prompt("Introduzca Primera Nota"));
	var nota2=parseInt(prompt("Introduzca Segunda Nota"));
	var nota3=parseInt(prompt("Introduzca Tercera Nota"));
	
	var promedio=(nota1+nota2+nota3)/3;

	if(promedio>=7){
		alert("Promocionado");
	}else{
		alert("Repetir");
	}
}

/*Crea una función a la que envíes tres números enteros y los muestre después en orden de
menor a mayor.*/
function ordenarNum(){
	const numeros = [];
	numeros[0]=parseInt(prompt("Introduzca Primer Numero"));
	numeros[1]=parseInt(prompt("Introduzca Segundo Numero"));
	numeros[2]=parseInt(prompt("Introduzca Tercer Numero"));

	alert(numeros.sort(function(a, b){return b - a}));
}

