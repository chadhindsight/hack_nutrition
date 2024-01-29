import { useAppContext } from './context/globalState';
import FoodBox from './components/FoodBox';
import './App.css'
import Search from './components/Search';

function App() {
  const { foodList } = useAppContext();


  return (
    <>
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
