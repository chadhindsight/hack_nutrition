// import Ant Design components before using them
import { Card, Col, Button } from 'antd';
import { foodData } from '../types';
import { useAppContext } from '../context/globalState';

function FoodBox(foodItem: foodData) {
    const { name, calories, image, servings, id } = foodItem

    const { dispatch } = useAppContext();

    const handleDelete = (id: number) => {
        dispatch({ type: 'DELETE_FOOD', payload: id });
    };

    return (
        <Col>
            <Card
                title={name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={image} height={60} alt={name} />
                <p>Calories: {calories}</p>
                <p>Servings: {servings}</p>
                <p>
                    <b>Total Calories: {calories * servings} </b> kcal
                </p>
                <Button type="primary" onClick={() => handleDelete(id)}> Delete </Button>
            </Card>
        </Col>
    );
}

export default FoodBox;