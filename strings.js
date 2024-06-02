const primeraParte = 'Hola'
const segundaParte = 'Soy'
const terceraParte = 'Diego Salazar Jara'
const presentacion = [primeraParte, segundaParte, terceraParte].join("-")
console.log(presentacion) //Hola Soy Diego Salazar Jara


const frutas = new Array('manzana', 'pera', 'uva');
console.log(frutas); // ['manzana', 'pera', 'uva']
console.log(typeof frutas); // object

const frutas2 = Array('manzana', 'pera', 'uva');
console.log(frutas2); // ['manzana', 'pera', 'uva']
console.log(typeof frutas2); // object

const frutas3 = ['manzana', 'pera', 'uva'];
console.log(frutas3); // ['manzana', 'pera', 'uva']
console.log(typeof frutas3); // object

const juegos = [
     ,{ nombre: "Warcarft",
        creado: "Blizzard",
        Año: 1994

    },
    {nombre: "Halo",
        creado: "Bungie",
        Año: "2001"
    }
]

console.log (juegos);

const ingredientes = [
    { nombre: 'huevos', tipo: 'ingrediente', cantidad: 1 },
    { nombre: 'carne', tipo: 'carne', cantidad: 2 },
    { nombre: 'disponible', valor: true },
    { nombre: 'condimentos', tipo: 'especias', lista: ['sal', 'pimienta'] }
];