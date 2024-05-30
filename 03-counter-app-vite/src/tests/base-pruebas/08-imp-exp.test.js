import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";


describe(' Pruebas en 08-imp-exp', () => { 
 test('getHeroeById debe de retornar undefined si no existe', () => {
    
    const id = 100;
    const heroe = getHeroeById( id );
    console.log(heroe);

    expect( heroe).toBeFalsy();

    //expect( heroe).toEqual({id:1, name: 'Batman', owner:'DC'});
 });

 test('getHeroesByOwner debe retornar eeroes de DC', () => {
   const owner= 'DC'; 
   
  const hero = getHeroesByOwner(owner);

  expect(hero.length).toBe(3);
  expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    
 });
 
 test('getHeroesByOwner debe retornar heroes de Marvel', () => {
    const owner= 'Marvel'; 
    
   const hero = getHeroesByOwner(owner);
 
   expect(hero.length).toBe(2);
   expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
     
  });
  
 

 });