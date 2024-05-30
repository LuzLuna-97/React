// import {heroes} from './data/heroes'
// console.log(heroes);

import  heroes, { owners }  from "../data/heroes";

console.log( owners );

export const getHeroeById = (Id) => {
    return heroes.find( (heroe) => heroe.id === Id );
}

console.log( getHeroeById(1));

export const getHeroeByOwner = (owner) => {
    return heroes.filter( (heroe) => heroe.owner === owner );
}
console.log( getHeroeByOwner('DC'));
console.log( getHeroeByOwner('Marvel'));