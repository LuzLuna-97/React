const activo= true;
// Cuendo quieres validar que el valor sea diferente de la condicion
const mensaje1 = !activo && 'Activo';
//Cuando quieres que el valor cumpla la condicion
const mensaje = activo && 'Activo';


console.log(mensaje);
console.log(mensaje1);

// let mensaje = '';

// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo'; 
// const mensaje = ( activo ) ? 'Activo' : null; 