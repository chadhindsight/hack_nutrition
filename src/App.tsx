import { useAppContext } from './context/globalState';
import FoodBox from './components/FoodBox';
import './App.css'
import Search from './components/Search';
import AddFoodForm from './components/AddFoodForm';

function App() {
  // get the foodList from global state
  const { foodList } = useAppContext();


  return (
    <>
      <AddFoodForm />
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
