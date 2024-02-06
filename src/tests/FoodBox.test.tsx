import { render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import FoodBox from '../components/FoodBox';

describe('FoodBox', () => {
    it('renders food item with correct details', () => {
        const foodItem = {
            name: 'Food name',
            calories: 100,
            image: 'test.jpg',
            servings: 2,
            id: 1
        };
        render(<FoodBox {...foodItem} />);

        expect(screen.getByText('Food name') as HTMLElement).toBeInTheDocument();
        expect(screen.getByText('Calories: 100')).toBeInTheDocument();
        expect(screen.getByText('Servings: 2')).toBeInTheDocument();
        expect(screen.getByText('Total Calories: 200')).toBeInTheDocument();
    });
});