import { useState } from 'react'
import foods from '../data/foods.json'

import { foodDataType } from './types';
import './App.css'
import FoodBox from './components/FoodBox';

function App() {
  // Put food data in state
  const [foodList, setFoodList] = useState<foodDataType>(foods);

  console.log(foodList);

  return (
    <>
      {
        foodList.map(foodItem => (
          <FoodBox {...foodItem} />
        ))
      }
    </>
  )
}

export default App
