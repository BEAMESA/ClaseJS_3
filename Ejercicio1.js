'use strict';

let numero = prompt('dime un numero');
let resultado = numero % 2


function checkNumber (numero) {
    if (numero%2 === 0) {
        console.log ('el numero par');
    } else (numero%2 !=== 0) {
        console.log("el numero es impar");
    }
}


