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
9) Prototype
10) map(), filter(), reduce() 
11) Promesas, Async/Await
*/

// 1) Const y Let (Block Scope)

//La declaración de variables con var produce lo que se conoce como hoisting y es que el compilador scanea todas las variables y luego ejecuta linea por linea. A las variables que no tienen valor las inicializa con undefined.

var x = 50;
if (true) {
    var x = 10;
    console.log('segunda x: ', x)
}
console.log('primera x: ', x)

// Ahora con let y const podemos definir scopes por bloque de código. Estas variables viven y mueren dentro de nuestro bloque.No podemos acceder a este tipo de variables fuera del bloque.

//regla 1
//console.log(xx)
//let xx;

//regla 2
let y = 12;
if (true) {
    let y = 50;
    console.log('segunda y: ', y)
}
console.log('primera y: ', y)

//Const
const pi = 3.14;
function area(radius) {
    const pi = 1;
    return (pi * radius * radius)
}
console.log('el valor de pi es: ' + pi, 'y el área es: ' + area(5))
//pi = 3.24 //error

// Propiedades de let:
// - Reasignar el valor a la variable
// - No podemos utilizar una variable con el mismo nombre
// - Nos permite scopear la variable dentro de un bloque {} ( if, for, function, while )

// Deberíamos de seguir utilizando var?
// Con let nuestro código es más explícito, y tenemos manejo de errores como por ejemplo cuando definimos una nueva variable con el mismo nombre.

// Hay que tener cuidado con const ya que esto no nos dice que nuestra variable sea inmutable

// Propiedades de const:
// - No nos brinda valores inmutables en objetos y array. Es decir podemos modificar las propiedades/atributos/keys de los objetos.
// - No podemos utilizar una variable con el mismo nombre
// - Nos permite scopear la variable dentro de un bloque {} ( if, for, function, while )

// 2) Arrow Functions

function sumaNumeros(numero1, numero2) {
    return numero1 + numero2;
}
console.log("la suma es: ", sumaNumeros(5, 1));

const multiplicaNumeros = (numero1, numero2) => numero1 * numero2;
console.log("la multip es: ", multiplicaNumeros(3, 3))


// 3) Modules (Imports and Exports)

import { peliculasCopadas, cantidadPeliculas } from '../js/libreriaAmiga.js'

console.log('pelis de mi modulo:', peliculasCopadas)
console.log('cantidad de pelis:', cantidadPeliculas(peliculasCopadas))

// 4) Template Literals

//pre es6
var str = 'One\n' + 'Two\n' + 'Three';

//post es6

const doSomething = () => true;

const aString = `A string`;
const joe = 'test';
const string = `something ${joe}` //something test
const string2 = `something ${1 + 2 + 3}`;
const string3 = `something ${doSomething() ? 'x' : 'y'}`;



// 5) Classes (Constructor, Super, Setters and Getters)

class Persona {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
    }

    obtenerDNI() {
        return this.dni
    }

    obtenerNombreCompleto() {
        return `${this.nombre} ${this.apellido}`
    }
}

const matias = new Persona('Matias', 'Fernandez', '38921874')
const sebastian = new Persona('Sebastian', 'Rodriguez', '34923574')

matias.obtenerDNI() //?
sebastian.obtenerDNI() //?

matias.obtenerNombreCompleto() //?
sebastian.obtenerNombreCompleto() //?

// 6) Default Parameters

const dividNumeros = (numero1 = 10, numero2 = 1) => {
    return numero2 > 0 ? numero1 / numero2 : false;
}
console.log("la división es: ", dividNumeros(10, 5));

// 7) The Spread Operator

// Spread operator nos va a servir para crear nuevos objetos u arrays sin referenciar a las propiedades de los mismos.
// Usando spread operator. Distribuimos los elementos del array u objeto en un nuevo array u objeto
const numerosNegativos = [-20, -80, -1000];
const numerosPositivos = [20, 120, 800, 420];

const numerosReales = [...numerosNegativos, ...numerosPositivos]
// [ numerosNegativos[0], numerosNegativos[1], numerosNegativos[2], numerosPositivos[0], numerosPositivoos[1], etc ]
console.log('numerosReales: ', numerosReales);

// Quiero obtener un objeto nuevo con todas las propiedades de empresa y todas las propiedas de paisEmpresa. Como puedo hacer?

const empresa = {
    nombreEmpresa: 'Argentina',
    logoEmpresa: 'logo.png',
}
const paisEmpresa = {
    nombrePais: 'Argentina',
    monedaPais: 'Peso Argentino'
}


const empresaOficial = {
    ...empresa,
    ...paisEmpresa,
}
console.log("empresa oficial: ", empresaOficial);

// 8) Destructuring

const numeros = [1, 2, 3, 4];

// Podemos obtener valores usando destructuring, en este caso obtuvimos los primeros 2 elementos del array numeros
const [numeroUno, numeroDos] = numeros;

// Podemos obtener un elemento de una posición en especial por ej el elemento en el indice 2, llenando con espacios vacios
const [, , numeroTres] = numeros;


// Definimos un objeto clima
const clima = {
    unidad: 'Celsius',
    temperatura: 21,
    provincia: 'Buenos Aires',
    pais: 'Argentina',
}

// pre es6
var temperature = clima.temperatura
var unidad = clima.unidad

// Como puedo obtener la propiedad temperatura, pais y la propiedad unidad?
// Obtuvimos la propiedad unidad y le cambiamos el nombre a unit
const { temperatura, pais, unidad: unit } = clima;

// 9) Rest Operator

// Puedo obtener la propiedad name, y por otro lado obtener un nuevo objeto con las propiedades website y founders?
const universidad = {
    name: 'Umai',
    website: 'https://umai.com',
    sedes: ['Caballito', 'Centro', 'Palermo']
}

const { name, ...otherInfo } = universidad
console.log('name: ', name)
console.log('otherInfo: ', otherInfo)

// Como hago para obtener la propiedad temperatura, y por el otro lado obtener un objeto que contenga las demas propiedades?
const { temperatura: temp, ...climateInfo } = clima
console.log('temp: ', temp)
console.log('climateInfo: ', climateInfo)

// 10) map(), filter(), reduce() 

// Métodos .map y .filter
console.log('numeros', numeros)

// Quiero obtener un nuevo array donde tenga todos los mismos numeros pero duplicados
const numerosDuplicados = []

for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index]
    numerosDuplicados[index] = numero * 2
}

console.log('numerosDuplicados: ', numerosDuplicados)

// Los métodos de los arrays como map, filter, reduce y demás, nos permite tener código más declarativo
// El método map nos devuelvo un nuevo array con los mismos elementos pero aplicandole una transformación (opcional) a estos
// Recibe como parámetro un callback (función) que se ejecuta por cada elemento
// Ventajas? Mayor declaratividad, más rápido de escribir y más simple. No modifica el array original. Es más difícil realizar una mutacioón involuntaria.
// Desventajas? Itera en todos los elementos pero no podemos saltear o cortar el for, es decir no podemos usar break o continue.

const numerosTriplicados = numeros.map(function (numero) {
    return numero * 3
})
console.log('numerosTriplicados: ', numerosTriplicados)

// Filter funciona de la misma manera que map.
// Debemos devolver una condición, si esta es verdad el elemento será incluido en el array, y si es falsa se excluye del mismo.

// Quiero obtener todos los
const numerosMayoresCien = numerosReales.filter(function (numero) {
    return numero > 100
})
console.log('numerosMayoresCien: ', numerosMayoresCien)

// Quiero obtener todos los números entre -200 y 200
const numerosEnRango = numerosReales.filter(function (numero) {
    return numero > -200 && numero < 200
})

console.log('numerosEnRango: ', numerosEnRango)


//Reduce

const total = [0, 1, 2, 3].reduce(function (a, b) { return a + b; });
console.log("total is : " + total);



//11) Promesas, Async/Await

// Definición Promesas ???

//Podemos esperar a que se cumpla una lógica asincrónica

// por ej un fetch a un servidor y posteriormente una nuestra lógica en el frontend

// El .then() y el .catch() es parte de la API de Promises, no de fetch en sí, sino que este último utiliza Promises.

fetch('https://jsonplaceholder.typicode.com/users') // Ya hicimos la llamada y nuestra Promesa esta en estado Pending
    .then(response => response.json()) // Nuestra promesa en estado success, y en el 1er then ya tenemos los datos. Tenemos que parsearlos
    .then(users => {
        // En el 2do then() ya podemos acceder a los datos que nos devuelve el servidor
        console.log(users)
    })

// Async / Await

// Las Promises nos ayudaron bastante para pensar código asincrónico de una manera sincrónica
// pero por defecto ya nos esta generando mucha identación de código, y podemos llegar a tener 1 o más promesas anidadas

// Async/await viene a resolver esto de una manera más sencilla y más legible.

// Como lo usamos?
// Requerimientos:
// 1. Necesitamos una función que tenga antepuesta la keyword async

// Dato de vital importancia:
// Async/Await solo funciona si utilizamos APIs que utilizen Promises por ej fetch
// Entonces podemos esperar a que se finalice o pase a estado Success nuestra Promesa

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return users
}

// Podemos llamar a nuestra función getUsers() que como tiene la palabra async ahora podemos usar la API de Promises sobre ella
// getUsers().then(data => console.log(data))

// 1 - Podemos usar await cuando invocamos getUsers() ? Si podemos porque esta es una Promise
// 2 - Necesitamos algo más ? Si, necesitamos por encima una función async

const mainLogic = async () => {
    const users = await getUsers()
    console.log('los usuarios son', users)
}

mainLogic()

// Como manejamos errores en Async/Await ?
// Usando try/catch, encapsulamos nuestra lógica dentro del bloque de try, y en el catch recibimos el error, y decidimos que hacer con el mismo

async function getUsersIds() {
    try {
        const users = await getUsers() // En caso que suceda un error se ejecuta no la siguiente, sino directamente el catch
        const userIds = users.map(({ id }) => id)

        return userIds
    } catch (error) {
        // Manejar / handlear el error. No se va "pinchar" nuestro frontend o backend
        console.error(error)
    }
}

const mainLogicIds = async () => {
    try {
        const users = await getUsers() // En caso que suceda un error se ejecuta no la siguiente, sino directamente el catch
        const userIds = users.map(({ id }) => id)
        console.log('los Ids de los usuarios son', userIds)
    } catch (error) {
        // Manejar / handlear el error. No se va "pinchar" nuestro frontend o backend
        console.error(error)
    }

}

mainLogicIds()

//Ejercitación

const alumnos = [
    { nombre: 'Rodrigo Andrade', edad: 23 },
    { nombre: 'Nayla Arroyo Lizzio', edad: 32 },
    { nombre: 'Marianela De Martino', edad: 20 },
    { nombre: 'Axel Julian Dumas Cutuli', edad: 19 },
    { nombre: 'Martina Franco', edad: 22 },
    { nombre: 'Agustina Garcia Vega', edad: 24 },
    { nombre: 'María Agustina Mattioli Pacheco', edad: 19 },
    { nombre: 'Franco Picco', edad: 33 },
    { nombre: 'Alva Ramírez', edad: 27 },
    { nombre: 'Diego Salischiker', edad: 29 },
]
  
// DISCLAIMER: La edad es ficticia y solo destinada para realizar los siguientes ejercicios

// 1. Obtener un array de strings con solo nombres de cada alumno usando .map()

// 2. Obtener un array con aquellos alumnos mayores a 25 años usando .filter()

// 3. Obtener un entero con la edad total de todos los alumnos usando .reduce() (Investigar)

// 4. Obtener en una constante la edad de "Franco Picco" usando .find() ( Investigar ) y destructuring del resultado. Investigar método includes

// 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también

// 6. Obtener un array con aquellos alumnos que empiezan con la letra "M", usando .filter()

// 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()

// 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos

//Async/Await

// 9. Buscar una API que más te guste en https://github.com/toddmotto/public-apis pero que debajo de la columna Auth especifique "No"

// 10. Implementar una función getDataWithPromises que utilice la API de Promises usando .then() (investigar)

// 11. Implementar una función getDataWithAsync que utilice async / await junto con la API fetch para buscar los datos de la API elegida

// 12. Hiciste manejo de errores? En caso que no lo hayas hecho utiliza .catch() en la función getDataWithPromises o try / catch en la función getDataWithAsync

// 13. Si te animás un poco más mostra los datos que trajiste en el elemento div con id "content". En caso que sea un array podés iterar usando .forEach() o .map()

// Para ello debes investigar y usar alguna de las siguientes APIs del DOM: querySelector(), innerHTML, textContent
