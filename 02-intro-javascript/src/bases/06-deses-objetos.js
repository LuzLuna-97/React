
//Dessestructuracíon
//Asignacion Desestructurante

const persona ={
    nombre:'Tony Stark',
    edad: 45,
    clave:'Ironman'
};

// const {nombre, edad, clave} = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);
// const retornaPersona = (usuario) =>{
//     const {nombre, edad, clave} = usuario;
//     console.log(nombre, edad, clave);
// }
// retornaPersona(persona);

const contenido = ({clave,edad}) =>{
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { nombreClave , anios, latlng:{lat,lng}} = contenido( persona );
console.log(nombreClave, anios );
console.log( lat , lng );


// const {nombreClave , anios} = useContext( persona );
// console.log(nombreClave, anios);

