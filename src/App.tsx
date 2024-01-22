import { useAppContext } from './context/globalState';
import FoodBox from './components/FoodBox';
import './App.css'

function App() {
  // get foodList from global state
  const { foodList } = useAppContext();


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
