import { useState } from 'react'
import foods from '../data/foods.json'

import './App.css'
console.log(foods)

function App() {
  // Put food data in state
  const [foodState, setFoodState] = useState(foods);

  console.log(foodState);

  return (
    <>

    </>
  )
}

export default App
