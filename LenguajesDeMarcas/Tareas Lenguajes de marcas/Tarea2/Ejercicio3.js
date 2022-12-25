function myFunction() {
    var fecha = new Date (document.getElementById("fecha").value);
    var mes = fecha.getMonth()+1;
    var dia = fecha.getDate();

    if((mes==12 && dia>=21) || mes<=2 || (mes==3 && dia<=20)){
        document.getElementById("resultado").innerHTML="invierno";
    }

    if((mes==3 && dia>=21) || mes==4 || mes==5 ||(mes==6 && dia<=20) ){
        document.getElementById("resultado").innerHTML="primavera";
    }

    if((mes==6 && dia>=21) || mes==7 || mes==8 ||(mes==9 && dia<=20)){
        document.getElementById("resultado").innerHTML="verano";
    }

    if((mes==9 && dia>=21) || mes==10 || mes==11 ||(mes==12 && dia<=20)){
        document.getElementById("resultado").innerHTML="otoño";
    }
}