//DESESTRUCTURACION DE ARREGLOS

const personajes= ['deadpool','superman','spiderman'];
const [,,p3]= personajes;

console.log(p3);


const retornaArreglo = () =>{
    return ['ABC',123];
}
const [letras,numeros]= retornaArreglo();
console.log(letras,numeros);

//TAREA
//1. el primer valor del arr se llamara nombre
//2. se llamara setNombre
const estado = (valor) =>{
    return [valor, ()=>{console.log('Hola Mundo')}];
}
const [nombre, setNombre] = estado('Goku');

console.log(nombre);
setNombre();

