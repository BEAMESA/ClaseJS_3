
const numeros = [4 ,50, 100, 80, 2]

// coje el array numeros, recorrelo i multiplicalo por 2

// const numerosGrandes = numeros.map (function(numeroindi) {
//     return numeroindi*2
// });

// console.log(numerosGrandes);



const topics = ['JavaScript', 'Variables', 'funciones', 'condicionales', 'bucles'];

// const topicsGrandes = topics.map (function(palabras) {
//     return palabras.toUpperCase();
// });

// topicsGrandes.reverse();

// console.log (topicsGrandes);





// Función flecha 

// const cadena = ['JavaScript', 'Variables', 'funciones', 'condicionales', 'bucles'];

// const cadenaFlecha = cadena.map (palabra => palabra.toUpperCase());
// console.log (cadenaFlecha);




// Funcion filtro

// const topicsFilter = topics.filter (function(palabra) {
//     return palabra.length < 4;
// });

// console.log(topicsFilter);



// Ejercicios clase

// const number = [253, 857, 1, 20, 562, 1223, 25, 27, 258, 254, 7458, 2684]


// const numberPares = number.filter (function(pares) {
//     if (pares%2 === 0) {
//         return pares;
//     }
// });

// console.log (numberPares);

// const numberImpares = number.filter (function(impares){
//     if(impares%2 !== 0) {
//         return impares;
//     }
// });

// console.log (numberImpares);



// Funcion de Reduce

// const palabras = ['aa', 'b', 'ccc'];

// let resultado = palabras.reduce(function(acc, current) {
//     if (acc.length > current.length) {
//         return resultado = acc;
//     } else {
//         return resultado = current;
//     }
// }, '');

// console.log(resultado);


// Ejercicio Classe REDUCE
// const times= [60, 75, 79, 80, 55, 59];
// let total = 0

// times.reduce(function(acumulador, ValorActual){
//     total = acumulador + ValorActual;
//     return total;
// }, 0);

// console.log (total)

// let media = total / times.length
// console.log (media)



const words = ['Environmental', 'Systems', 'Research',  'Institute'];


let wordMin = words.reduce(function(acc, currentValue) {
    if (acc.length > currentValue.length) {
        return  acc;
    } else {
        return currentValue;
    }
}, '');

console.log (wordMin);