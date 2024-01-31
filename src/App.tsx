import { useAppContext } from './context/globalState';
import FoodBox from './components/FoodBox';
import './App.css'
import Search from './components/Search';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import { Button, Divider, Row } from 'antd';

function App() {
  const [isFormShown, setIsFormShown] = useState(false);

  const { foodList } = useAppContext();


  return (
    <>
      <Button onClick={() => setIsFormShown(!isFormShown)}>{isFormShown ? "Hide Form" : "Show Form"}</Button>
      {
        isFormShown ?
          <AddFoodForm /> : null
      }
      <Divider />
      <Search />
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {
          foodList.map(foodItem => (
            <FoodBox key={foodItem.id} {...foodItem} />
          ))
        }
      </Row>
    </>
  )
}

export default App
