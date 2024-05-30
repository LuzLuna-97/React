
describe('Pruebas en <DemoComponent/>', () => {
    
test(' Esta prueba no debe de fallar', ()=> {
   const  message1 = 'Hola chico';

   const message2= message1.trim();
   expect(message2).toBe(message2);
})
});