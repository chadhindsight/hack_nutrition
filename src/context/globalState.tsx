import React, { createContext, useContext, ReactNode, useReducer, Dispatch } from 'react';
import { foodData, foodDataArray } from '../types';
import foods from '../../data/foods.json';

interface AppContextProps {
    foodList: foodDataArray;
    dispatch: Dispatch<FoodAction>;
}

type FoodAction =
    | { type: 'SET_FOOD_LIST'; payload: foodDataArray }
    | { type: 'DELETE_FOOD'; payload: number }
    | { type: 'SEARCH_FOOD'; payload: string };

const appReducer = (state: foodDataArray, action: FoodAction): foodDataArray => {
    switch (action.type) {
        case 'SET_FOOD_LIST':
            return action.payload;
        case 'DELETE_FOOD':
            return state.filter((food) => food.id !== action.payload);
        case 'SEARCH_FOOD':
            return state.filter((food) => {
                const lowercaseQuery = action.payload.toLowerCase();
                // handles cases where a user might clear the search field
                return lowercaseQuery === '' ? foods : food.name.toLowerCase().includes(lowercaseQuery);
            });
        default:
            return state
    }
};


const defaultContextValue: AppContextProps = {
    foodList: foods,
    dispatch: () => { }, // Provide a dummy dispatch function or handle it based on your needs
};

export const AppContext = createContext<AppContextProps>(defaultContextValue);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [foodList, dispatch] = useReducer(appReducer, foods);

    return (
        <AppContext.Provider value={{ foodList, dispatch }
        }>

            {children}
        </AppContext.Provider>
    );
};
// state.filter((food) => food.name.includes(action.payload));   