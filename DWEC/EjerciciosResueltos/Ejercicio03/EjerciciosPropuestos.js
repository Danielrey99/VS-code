/*1) Escribir un código JS que pida al usuario una hora, minuto y segundo y que nos muestre
 en una etiqueta HTML de tipo párrafo (<p></p>) la hora completo en el segundo siguiente.*/
var hora=parseInt(prompt("Introduce una hora entre 0 y 24"));
var min=parseInt(prompt("Introduce los minutos entre 0 y 60"));
var seg=parseInt(prompt("Introduce los segundos entre 0 y 60"));

if(seg==60){
    seg=0;
    min+=1;
}
if(min>=60){
    min-=60;
    hora+=1;
}
if(hora==25){
    hora=0;
}


 document.write(`<p>Hora: ${hora}, Minuto: ${min}, Segundo: ${seg}</p>`);

 /*2) Pedir un String y mostrar true si tiene 5 caracteres o mas, caso contrario, mostrar false utilizar el operador ternario.*/
 var cadena=prompt("Introduce un String");
 var resultado = cadena.length>=5 ? true : false;
 alert(resultado);

 /*3) Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres 
 números y mostrar true si el promedio es mayor a 5 caso contrario mostrar false, utilizar el operador ternario.*/
 var num1=parseInt(prompt("Introduce un numero del 1 al 10"));
 var num2=parseInt(prompt("Introduce un numero del 1 al 10"));
 var num3=parseInt(prompt("Introduce un numero del 1 al 10"));

 var promedio=(num1+num2+num3)/3;
 var calificacion= promedio>=5 ? true : false;
alert(`Estás aprobado? : ${calificacion}`);