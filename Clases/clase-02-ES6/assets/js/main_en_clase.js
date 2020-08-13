/*Javascript ES6, today is the day....*/

// ECMAScript o ES, es un conjunto de especificaciones que salen año tras año.
// ECMAScript6 o ES2015, fue el conjunto de features más grande hasta el momento.


/*
1) Const y Let (Block Scope)
2) Arrow Functions
3) Modules (Imports and Exports)
4) Template Literals
5) Classes (Constructor, Super, Setters and Getters)
6) Default Parameters
7) The Spread Operator
8) Destructuring
9) Rest Operator
10) map(), filter(), reduce() 
11) Promesas, Async/Await
*/

// 1) Const y Let (Block Scope)

let miVariable = 10;
if(true){
   let miVariable = 10;
    console.log("variable 2", miVariable)
}
if(true){
    let miVariable = 60;
    console.log("variable 3", miVariable)
}
console.log("variable 1", miVariable)

let miVariableLet = 0;
console.log(miVariableLet);


const miConst = 0;
//miConst = 10;

const miObjeto = {
    nombre: 'Mike',
    apellido: 'Morron',
}

// miObjeto = {
//     nombre: 'Susan',
//     apellido: 'Pere'
// }

const miArray = [1,2,3];
let segundoArray = miArray;
segundoArray.push(4);

console.log("miArr", miArray);
console.log("segd", segundoArray)


//2) Arrow Functions

function suma(num1, num2){
    return num1 + num2;
}

console.log("mi suma:", suma(2,4))

const sumaArrow = (num1, num2) => {
    return num1 + num2;
}

console.log("mi suma Arrow:", sumaArrow(2,5))

const sumaArrow2 = (num1, num2) => num1 + num2;

console.log("mi suma Arrow 2:", sumaArrow2(2,10))

const escribeMensaje = msg => console.log('mi mensaje es: ', msg);

escribeMensaje('Hola mike');


//3) Modules (Imports and Exports)

import { peliculasCopadas, cantidadPeliculas } from '../js/libreriaAmiga.js';
console.log('mis Pelis:',peliculasCopadas)
console.log('cantidad de mis Pelis:',cantidadPeliculas(peliculasCopadas))

//4) Template Literals

var nombre = 'Mike';
var saludo = 'Hola';
var msg = 'buen dia';

var mensajeCompleto = saludo + " " + nombre + " " + msg;

console.log(mensajeCompleto);

let nombreTL = 'Mike';
let saludoTL = 'Hola';
let msgTL = 'buen dia';

const funcTexto = () => 'hola';

let mensajeCompletoTL = `${saludoTL} es un buen dia para ser ${nombreTL} y mi func texto es: ${funcTexto()}`;

let miParrafo = `<p class="clase_parrafo">Hola soy 'el' Diego</p>`

const $content = document.querySelector('#content');
$content.innerHTML = miParrafo;

console.log(mensajeCompletoTL);

// `` -> '' -> ""

//5) Classes (Constructor, Super, Setters and Getters)

class Perro {
    constructor(colorPelo, nombreDuenio, sexo, raza, tieneCollar){
        this.colorPelo = colorPelo;
        this.nombreDuenio = nombreDuenio;
        this.sexo = sexo;
        this.raza = raza;
        this.tieneCollar = tieneCollar;
    }

    ladrar(){
        return `Hola!, Mi color de pelo es ${this.colorPelo} y soy de raza ${this.raza} y ${this.tieneCollar ? 'tengo': 'no tengo'} collar`
    }

}

const perro1 = new Perro('Negro', 'Josep', 'Hembra', 'Terrier', true);
console.log(perro1.ladrar())

//6) Default Parameters

const division = (num1 = 10, num2 = 6) => {
    if(num2 > 0){
        return num1/num2;
    }else{
        return false;
    }
} 
console.log("mi resultado es: ", division(20));


//7) The Spread Operator

const numerosNegativos = [-100, -200, -450, -500];
const numerosPositivos = [100, 300, 500, 720];

const numerosReales = [...numerosNegativos, ...numerosPositivos, 1000];

console.log("Numeros reales", numerosReales)


//8) Destructuring

const clima = {
    unidad: 'Celsius',
    temperatura: 23,
    provincia: 'Buenos Aires',
    pais: 'Argentina',
}

//const temperatura = clima.temperatura;
//const provincia = clima.provincia;

const { unidad, temperatura: temp, temperatura } = clima 

console.log("la temp es: ", temp)
console.log("la temperatura es: ", temperatura)


// 9) Rest Operator

const universidad = {
    name: 'Umai',
    website: 'https://umai.com',
    sedes: ['Caballito', 'Centro', 'Palermo'],
    director: "Wolko"
}

const { name, website, ...otrosDatos} = universidad;

console.log("nombre", name);
console.log("Web", website);
console.log("otros datos", otrosDatos);


//10) map(), filter(), reduce() 

//11) Promesas, Async/Await
