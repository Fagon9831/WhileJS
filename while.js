//Ejercicio#1
/*var iNume= window.prompt("Ingresa un numero")
var num=1;
while (num<=iNume) {
    if (num%5==0) {
        console.log("El numero : "+num+" es multipo de 5")    
    }
    num++
}*/
//Ejercicio#2
/*var iNume1= window.prompt("Ingresa el primer numero")
var iNume2= window.prompt("Ingresa el segundo numero")
var iIni=1;
if(iNume1>0&&iNume1<=50||iNume2>0&&iNume2<=50){
    while (iIni<=50) {
        if (iNume1==iIni||iNume2==iIni) {
            console.log("¡Lotería!");
        }else{
            console.log(iIni);
        }
        iIni++
    }
}*/
//Ejercicio#3
/*
var array=[]
var iCont=0
var iNume1= 1
while (iNume1!=0) {    
    iNume1=window.prompt("Introduce un numero para guardarlo, y 0 para terminar e imprir el arreglo")
    array[iCont]=iNume1    
    iCont++
}
console.log(array);
*/
//Ejercicio#4
/*var array=""
var sNume1
while (sNume1!="") {    
    sNume1=window.prompt("Introduce una palabra o letra, deje en blanco para terminar e imprir el arreglo")
    array=array.concat(sNume1)
}
console.log(array);*/
//Ejercicio#5
var sSemana
while (sSemana!="domingo") {    
    sSemana=window.prompt("Ingresa un dia de la semana")
    if (sSemana=="domingo") {
        window.alert("Ve a descansar, Feliz "+sSemana)
    }else{
        window.alert("Vuelve a intentarlo, el dia "+sSemana+" no es el seleccionado ")
    }    
}
console.log(array);