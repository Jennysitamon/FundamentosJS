// funciones en JavaScript

// funcion sin parámetros y sin retorno
function saluda(){
    console.log('Holip');
}
saluda();
//funcion con parametros y sin retorno
function addOne(num){
    console.log(`el ${ num } + 1 = ${ num + 1}`);
}

addOne(15);

//funcion con parametros y con retorno
function suma(num1, num2){
    return num1 + num2;
}
const result = suma(12, 70);
console.log(result);

//funciones como constantes
//funciones anonimas
const resta = function (num1, num2){
    return num1 - num2;
}
const resultado = resta(12,20);
console.log(resultado);

//Funciones de felcha Arrow Functiones
(param1, param2) => {
    //code
    //return
}
const duplica = (num) => {
    return num * 2;
}
const multiplica = (num1, num2) => {
    console.log('Multiplica números');
    return num1 = num2;
}
const doble = duplica(16);
console.log(doble);
const resultM = multiplica(13, 26);
console.log(resultM);

//Sumplificamos Arrow Fuctiones
let cambiaMinusculas =  (word) => {
    return word.toLowerCase();
}
//Si solo es un unico parametro se pueden omitir parentesis
//Si la unica linea es el return se puede omitir llaves
cambiaMinusculas = word => word.toLowerCase();