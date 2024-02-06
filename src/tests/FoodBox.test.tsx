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
        const totalCaloriesElement = screen.getByText(/Total Calories/i)?.closest('p')?.querySelector('b');
        // Assert the text content within the <b> element
        expect(totalCaloriesElement).toHaveTextContent('200');
        expect(totalCaloriesElement?.nextSibling?.textContent).toContain('kcal');
    });
});
