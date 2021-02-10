'use strict';

var mensaje = prompt ('Dime una frase');
var mayusculas = mensaje.toUpperCase();
var minusculas = mensaje.toLowerCase ();




function escrito (mensaje) {
    if (mensaje === mayusculas) {
        return 'El mensaje tiene mayusculas'
    } else if (mensaje === minusculas) {
        return 'El mensaje tiene minusculas'
    } else {
        return 'Hay mayusculas y minusculas'
    }
};

const resultado = escrito(mensaje);
console.log(resultado)