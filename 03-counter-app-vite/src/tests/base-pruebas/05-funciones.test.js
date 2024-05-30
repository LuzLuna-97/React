import { getUser,getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto ', () => {
       const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    };


    const user= getUser();
    console.log(user);
       expect( testUser ).toEqual( user);

    });
//TAREA
    test('getUsuarioActivo debe de retornar un objeto', () => {
      const name='Luna';

      const userA = getUsuarioActivo(name);
      console.log(userA);
      expect( userA ).toStrictEqual({
            uid: 'ABC567',
            username: name
     });

    });
    
    
});

