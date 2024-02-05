import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FoodBox from "../components/FoodBox";

describe('FoodBox component', () => {
    const foodInfo = {
        "name": "Salad",
        "calories": 150,
        "image": "https://i.imgur.com/DupGBz5.jpg",
        "servings": 1,
        "id": 420
    }
    //  renders the "FoodBox" component with props spread from the  foodInfo object.
    // renders the component in a virtual DOM environment, allowing you to interact with it and make assertions.
    const { getByText } = render(<FoodBox {...foodInfo} />);

    it('renders a component that displays info for a salad', () => {
        // Check if the component has it's related information rendered
        expect(getByText(foodInfo.name)).toBeTruthy();
        expect(getByText(foodInfo.calories)).toBeTruthy();
        expect(getByText(foodInfo.id)).toBeTruthy();
    })
})