import './App.css';
import { useEffect, useState } from 'react';
import DishesGrid from './components/DishesGrid';
import MenuBuilder from './components/MenuBuilder'

const url = 'http://127.0.0.1:3001/dishes/';

const App = () => {
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async (options) => {
    let response;
    options ? response = await fetch(url + options)
      : response = await fetch(url);
    const data = await response.json();

    setDishes(data)
  }

  const onClick = (ingredient) => {
    fetchDishes(ingredient);
  }

  useEffect(() => {
    fetchDishes();
  }, [])

  return (
    <div className="App">
      <DishesGrid dishes={dishes} onClick={onClick} />
      <MenuBuilder />
    </div >
  );
}

export default App;
