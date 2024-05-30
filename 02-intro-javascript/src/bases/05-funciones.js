//Funciones JS

 const saludar = function( nombre ){
    return `Hola, ${ nombre }`;
}

/*------------------------------------------------------*/
//FUNCION DE FLECHA
//EJEMPLO 1
const saludar2 =( nombre ) => {
    return `Hola, ${ nombre }`;
}
//EJEMPLO 2
const saludar3 =( nombre) =>  `Hola, ${ nombre }`;
//EJEMPLO 3
const saludar4 =() =>  `Hola Mundo`;
/*------------------------------------------------------*/

console.log( saludar );
console.log( saludar2('Vegeta') );
console.log( saludar3('Pickachu') );
console.log( saludar4() );

//FUNCION DE FLECHA QUE RETORNA UN OBJETO

//EJEMPLO 1
const getUser =()=>{
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

//EJEMPLO 2

const getUser1 =()=>(
    {   
        uid: 'ABC123',
        username: 'El_Papi1502'
    }

);
   


console.log( getUser());
console.log( getUser1());


// TAREA
//TRANSFORMAR A FUNCTION DE FLECHA
//TIENE QUE RETORNAR UN OBJETO IMPLICITO
// PRUEBAS
function getUsuarioActivo( nombre ){
    return{
        uid: 'ABC567',
        username: nombre
    }
};

const userActivo = getUsuarioActivo('Marina');
console.log( userActivo );


//TAREA RESUELTA

const getUsuarioActive =( nombre )=>(
    {
     uid: 'ABC567',
     username: nombre
     }
);

const user = getUsuarioActive('Marina');
   console.log( user );