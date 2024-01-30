import { Divider, Input } from "antd";
import { FormEvent, useState } from "react";
import { foodData } from "../types";
import { useAppContext } from '../context/globalState';

const AddFoodForm = () => {
    const { dispatch } = useAppContext();

    // use foodData the to 'type' the data store in local state and send that data as the payload to context
    const [newData, setNewData] = useState<foodData>({} as foodData)
    const inputFields = ['name', 'image', 'calories', 'servings'];
    // onChange
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof foodData) => {
        const value = e.target.value;
        console.log('new ting', newData)

        setNewData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };
    // onSubmit- call the dispatch action
    const submitFood = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({ type: 'ADD_FOOD', payload: newData });
    }
    return (
        <form onSubmit={(e) => submitFood(e)}>
            <Divider>Add Food Entry</Divider>

            {
                inputFields.map((field, idx) => (
                    <div key={idx}>
                        <label>{field}</label>
                        <Input type={field === 'calories' || field === 'servings' ? 'number' : 'text'}
                            onChange={(e) => handleChange(e, field as keyof foodData)} />
                    </div>
                ))
            }

            <button type="submit" >Create</button>
        </form>
    );
};

export default AddFoodForm;