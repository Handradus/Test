let edad = 30;
const nombre= "Humberto Andrades";
console.log(nombre,edad);

let datos ={
    nombre,
    edad,
    pais:"Chile",

}

console.log(datos.nombre,datos.pais);

//Ojo un array en con []

let numeros = [1,2,3,4,5,6];
console.log (numeros);

console.log (typeof numeros);

function sumar(a, b) {
    return a + b;
  }


  let res =sumar (numeros[2],numeros[4]);

  console.log (res)

  let fechaActual = new Date();

  console.log (fechaActual);
