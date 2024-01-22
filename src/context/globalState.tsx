import React, { createContext, useContext, ReactNode, useReducer, Dispatch } from 'react';
import { foodDataArray } from '../types';
import foods from '../../data/foods.json';

interface AppContextProps {
    foodList: foodDataArray;
    dispatch: Dispatch<FoodAction>;
}

type FoodAction =
    | { type: 'SET_FOOD_LIST'; payload: foodDataArray }
    | { type: 'DELETE_FOOD'; payload: number };

const appReducer = (state: foodDataArray, action: FoodAction): foodDataArray => {
    switch (action.type) {
        case 'SET_FOOD_LIST':
            return action.payload;
        case 'DELETE_FOOD':
            return state.filter((food) => food.id !== action.payload);
        default:
            return state;
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