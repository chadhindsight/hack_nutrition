import { createContext, useContext, ReactNode, useReducer, Dispatch } from 'react';
import { foodData, foodDataArray } from '../types';
import foods from '../../data/foods.json';

type FoodAction =
    | { type: 'SET_FOOD_LIST'; payload: foodDataArray }
    | { type: 'ADD_FOOD'; payload: foodData }
    | { type: 'DELETE_FOOD'; payload: number }
    | { type: 'SEARCH_FOOD'; payload: string };

interface AppContextProps {
    foodList: foodDataArray;
    dispatch: Dispatch<FoodAction>;
}

const appReducer = (state: foodDataArray, action: FoodAction): foodDataArray => {
    switch (action.type) {
        case 'SET_FOOD_LIST':
            return action.payload;
        case 'DELETE_FOOD':
            return state.filter((food) => food.id !== action.payload);
        case 'SEARCH_FOOD':
            if (action.payload.toLowerCase().trim() === '') {
                return foods; // If the search query is empty, return the original list
            } else {
                return foods.filter((food) => food.name.toLowerCase().includes(action.payload.toLowerCase()));
            }
        default:
            return state
    }
};


const defaultContextValue: AppContextProps = {
    foodList: foods,
    dispatch: () => { },
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
