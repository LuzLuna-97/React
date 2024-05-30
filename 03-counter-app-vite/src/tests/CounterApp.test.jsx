import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from "../CounterApp";

describe('Pruebas del CounterApp', () => {

    const initValue = 30;
    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={ initValue } />);
        expect(container).toMatchSnapshot();
    
    });
    
    test('debe demostrar el valor inicial de 100 <CounterApp value={100} />', () => {
         render(<CounterApp value={ 100} />);
     
        expect(screen.getByText(100)).toBeTruthy();
        // expect( screen.getByRole('heading',{ level: 2}).innerHTML ).toContain('100');
    
    });
    test('debe de incrementar con el boton +1', () => {
        render(<CounterApp value={ initValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('31')).toBeTruthy();

    });
    
    test('debe de decrementar con el boton -1', () => {
        render(<CounterApp value={ initValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('29')).toBeTruthy();

    });
    test('debe de reiniciar con el boton reset', () => {
        render(<CounterApp value={ initValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        //fireEvent.click(screen.getByText('Reset'));
        expect(screen.getByText('30')).toBeTruthy();
        });
    
});
