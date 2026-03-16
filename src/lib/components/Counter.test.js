import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Counter from './Counter.svelte';

describe('Counter Component', () => {
	it('renders with initial count', () => {
		render(Counter, { props: { count: 0 } });
		expect(screen.getByText(/Counter: 0/i)).toBeTruthy();
	});

	it('renders with custom initial count', () => {
		render(Counter, { props: { count: 5 } });
		expect(screen.getByText(/Counter: 5/i)).toBeTruthy();
	});

	it('increments count when + button is clicked', async () => {
		render(Counter, { props: { count: 0 } });
		const incrementButton = screen.getByText('+');
		
		await fireEvent.click(incrementButton);
		expect(screen.getByText(/Counter: 1/i)).toBeTruthy();
	});

	it('decrements count when - button is clicked', async () => {
		render(Counter, { props: { count: 5 } });
		const decrementButton = screen.getByText('-');
		
		await fireEvent.click(decrementButton);
		expect(screen.getByText(/Counter: 4/i)).toBeTruthy();
	});

	it('resets count to 0 when Reset button is clicked', async () => {
		render(Counter, { props: { count: 10 } });
		const resetButton = screen.getByText('Reset');
		
		await fireEvent.click(resetButton);
		expect(screen.getByText(/Counter: 0/i)).toBeTruthy();
	});

	it('renders all three buttons', () => {
		render(Counter, { props: { count: 0 } });
		expect(screen.getByText('+')).toBeTruthy();
		expect(screen.getByText('-')).toBeTruthy();
		expect(screen.getByText('Reset')).toBeTruthy();
	});
});
