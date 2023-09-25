// Strings
const firstName = 'Jenysita';
const lastName = 'Montiel';
const fullName = firstName + " " + lastName;

console.log("I'm " + firstName)
console.log("I\'m " + firstName)

console.log(fullName);

//Strings Multilinea
const menu = `
elige:
1 - Opción 1
2 - Opción 2
3 - Opción 3
`;

console.log(menu);

//Strings Templates
//placeholder ${}

const city = 'Huamantla';
const phone = '234567890';
const rol = 'Estudiante';

const presentation = `
Holaa
Soy ${ fullName}, ${ rol } en la UTT
Vivo en ${ city }
Te puedes comunicar conmigo en ${ phone }
`;

console.log(presentation);