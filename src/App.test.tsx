import App from './App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    it('renders Vite + React heading', () => {
        render(<App />);
        expect(screen.getByText('Vite + React')).toBeInTheDocument();
    });
});