//Problema 1
const prompt = require("prompt-sync")({ sigint: true });
function problema1(){
    const nombre = prompt("Ingrese su nombre completo: ");
    let result = nombre.toLowerCase();
    console.log(result);
    result = nombre.toUpperCase();
    console.log(result);
    result = nombre[0].toUpperCase();
    result = nombre.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
    console.log(result);
}
//problema1();
//Problema 2
function problema2(){
    const nombre = prompt("Ingrese su nombre: ");
    console.log(`${nombre.toUpperCase()} tiene ${nombre.length} letras`);
}
//problema2();
//Problema 3
function problema3(){
    const numero = prompt("Ingrese el número de telefono con el siguiente formato +34-número--56: ")
    //"+34-913724710-56";
    console.log(`${numero.slice(4,numero.length-3)}`)
}
//problema3();
//Problema 4
function problema4(){
    const frase = prompt("Ingresa una frase: ");
    let fraseIn = frase.split("");
   console.log(fraseIn.reverse().join(""));
   // console.log(`${frase}`)
}
//problema4();
//Problema 5
function problema5(){
    let frase = prompt("Ingrese la frase: ");
    const vocal = prompt("Ingrese la vocal que desea reemplazar en la frase: ");
    console.log(`${frase.replaceAll(vocal,vocal.toUpperCase())}`);
}
//problema5();
//Problema 6
function problema6(){
    const correo = prompt("Ingrese un correo electronico: ");
    let newCad = correo.slice(0,correo.indexOf("@"));
    console.log(`${newCad}@ceu.es`);
    
}
//problema6();
//Problema 7
function problema7(){
    let fechaN = prompt("Ingrese la fecha de nacimiento en formato dd/mm/aaaa: ");
    let arr = fechaN.split("/");
    console.log(`día: ${arr[0]} mes: ${arr[1]} año: ${arr[2]}`)

}
//problema7();
//Problem 8
function problema8(){
    let productos = prompt("Ingrese los productos separados por coma(,): ");
    let arr = productos.split(",");
    arr.forEach(element => {
        console.log(element);
    });
}
//problema8();
//Problema 9
function problema9(){
    let frase = prompt("Ingrese la frase: ");
    let arr = frase.split(" ");
    console.log(`La cantidad de palbaras en la oración es ${arr.length}`);
}
//problema9();
//Problema 10
function problema10(){
    let cad = prompt("Ingrese la palabra a comprobar: ");
    let cadIn = cad.split("");
    let invertida = cadIn.reverse().join("");
    if(cad == invertida){
        console.log("Es capicua")
    }else{
        console.log("No es capicua")
    }
}
problema10();