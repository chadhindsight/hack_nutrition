import { useAppContext } from './context/globalState';
import FoodBox from './components/FoodBox';
import './App.css'
import Search from './components/Search';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import { Button, Divider } from 'antd';

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
      {
        foodList.map(foodItem => (
          <FoodBox key={foodItem.id} {...foodItem} />
        ))
      }
    </>
  )
}

export default App
