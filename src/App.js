import './App.css';
import { useEffect, useState } from 'react';
import DishesGrid from './components/DishesGrid';

const url = 'http://127.0.0.1:3001/dishes/';

// const router = {
//   '/dishes': () => <DishesGrid />
// }

const App = () => {

  const [dishes, setDishes] = useState([]);

  const fetchDishes = async (options) => {
    let response;
    options ? response = await fetch(url + options)
      : response = await fetch(url);
    const data = await response.json();

    setDishes(data)
  }

  useEffect(() => {
    fetchDishes();
  }, [])

  return (
    <div className="App">
      <DishesGrid dishes={dishes}></DishesGrid>
    </div >
  );
}

export default App;
