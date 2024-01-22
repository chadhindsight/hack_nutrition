// import Ant Design components before using them.
import { Card, Col, Button } from 'antd';
import { foodData } from '../types';

// Iteration 2
function FoodBox(foodItem: foodData) {
    const { name, calories, image, servings, deleteFood } = foodItem
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
                <Button type="primary" onClick={deleteFood}> Delete </Button>
            </Card>
        </Col>
    );
}

export default FoodBox;