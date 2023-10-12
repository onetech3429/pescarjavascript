let a , b, c, numero;
const iva = 21; 
console.log("Hola desde la consola");
document.write("Hola desde el Body");
/* alert("Hola desde le ventana emergente") */
let num = 15;
var num1 = 20;
const num2 = 25;
console.log(num2);
var num3 = true;
var num4 = false;
let nom = 'Nombre';
let arreglo = ['Juan','Gomez', 23];
console.log(arreglo)
console.log(arreglo[2])
var objeto = {
    //atributos
    nombre : 'marta',
    apellido : 'Perez',
    edad : 40
    //métodos
} 
console.log(objeto.nombre);
let x = 15;
let flag = true;
if(flag){    
   console.log(x);
   if(x != 14){
    console.log("salimos")
    var p = 'hola';
    const iva = 21;
    flag = false;
   }      
}
console.log('siempre')
console.log(p)
//funciones
function mefui(){
    let mensaje = 'chau';
    return mensaje;
}
function vine(){
    let mensaje = 'hola';
    return mensaje;
}
function mostrar(){    
    return console.log('foto')
}
function mostrar2(dato){
    console.log('El nombre es ' +dato)
}
function sumar(a, b, c){
    let suma = a + b +c;
    return suma
}
let num10 = 2;
let num11 = 3;
let num12 = 5; 
console.log(mostrar2('Juan'));
console.log(sumar(num10, num11, num12));
