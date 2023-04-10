var nombre = 'Jose ';
var apellido = 'Montes';
var nombreCompleto = nombre+' '+apellido; //primera concatenación
console.log(nombreCompleto);
var nombreCompleto2 = 'Gabriel'+'Osores';//Segunda concatenación
console.log(nombreCompleto2);
var juntos = nombre + 219; //lee de izq a der siguiendo la cadena lee el num como str
console.log(juntos);
juntos = nombre + 78 + 17; //Aquí se puede diferenciar a través de los ()
console.log(juntos);
juntos = 78 + 17 + nombre; 
console.log(juntos);

nombre += apellido; //Tercera Concatenacion usando el operador simplidicado
console.log(nombre);
