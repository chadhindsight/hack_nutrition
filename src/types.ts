export interface foodData {
    name: string;
    calories: number;
    image: string;
    servings: number;
    id: number;
    deleteFood?: () => void;
}

export type foodDataType = foodData[];