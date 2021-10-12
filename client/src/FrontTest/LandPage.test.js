import { render, screen} from '@testing-library/react';
import LandingPage from '../components/LandPage'
import { MemoryRouter } from 'react-router-dom';

test('Renderiza texto de bienvenida', () => {
    render(<LandingPage />, { wrapper: MemoryRouter})

    expect(screen.getByText('Welcome!')).toBeInTheDocument()
}) 