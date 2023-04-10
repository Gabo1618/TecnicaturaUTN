// Tipos d datos en Javascript
/*
Estos para multiplees lineas
La sintaxiss en lo que es comentarios
es muy similar a Java
realmente diriamos que es identica
*/

var nombre = 'Gabriel'; //Tipo Str
console.log(typeof nombre);
nombre = 7;
console.log(typeof nombre);
nombre = 12.3;
console.log(typeof nombre);


var numero = 3000; //Tipo numérico
console.log(numero);
//tipo object
var objeto = {
    nombre : 'Gabriel', 
    apellido : 'Osores', 
    telefono : '1160161400'

}

console.log(typeof objeto);

// Tipo de dato boolean
var bandera = true;
console.log(bandera);

//Tipo de dato funcion
function miFuncion(){}
console.log(typeof miFuncion); 

//tipo de dato Symbol
var simbolo = Symbol('Mi simbolo');
console.log(typeof simbolo);

//tipo de dato clase
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

 console.log(typeof Persona);

 //Tipo de dato undefined
 var x;
 console.log(typeof x);

 x = undefined;
 console.log(typeof x);

// null: ausencia de valor
var y = null; //null no es un tipo de dato, pero su origen es object
console.log(typeof y);

//Tipo de dato array y empty String
var autos = ['Citroen','Audi', 'Ford', 'BMW'];
console.log(autos);['Citroen','Audi', 'Ford','BMW']
console.log(typeof autos); //preguntamos que tipo de dato es:

var z = '';
console.log(z);//Esto se refiere a que es una cadena vacia:
console.log(typeof z);



