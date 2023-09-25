// funciones de orden superior
// high order functions
//funciones que reciben otras funciones como parametros

const myFunctionWithBigName = () => {
    console.log('Esta es una funcion');
}
myFunctionWithBigName();

const myFun = myFunctionWithBigName;

myFun();

const funOne = () => {
    console.log('Ejecuta funcion 1');
}

const funTwo = (name) => {
    console.log('Hola ' + name);
    console.log('Ejecuta funcion 2');
}

const funThree = (otherFunction) => {
    otherFunction();
    console('Ejecuta funcion 3');
}

funOne();
funTwo('Roblox');