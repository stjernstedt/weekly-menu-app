import './App.css';
import { useState, useEffect } from 'react';
import DishesGrid from './components/DishesGrid';
import MenuBuilder from './components/MenuBuilder'

// const url = 'http://127.0.0.1:3001/dishes/';
// const url = 'https://pleasant-erin-pig.cyclic.app/dishes'
const url = process.env.REACT_APP_SERVER_URL

const App = () => {
  document.title = 'Weekly Dish';
  const [dishes, setDishes] = useState([]);
  // const [currentDay, setCurrentDay] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(1);

  const fetchDishes = async (options) => {
    let response;
    options ? response = await fetch(url + '/' + options)
      : response = await fetch(url);
    const data = await response.json();

    setDishes(data)
  }

  const updateDishes = (ingredient) => {
    fetchDishes(ingredient);
  }

  useEffect(() => {
    fetchDishes();
  }, [])


  return (
    <div className="App">
      <DishesGrid dishes={dishes} updateDishes={updateDishes} currentDay={currentDay} />
      <MenuBuilder setCurrentDay={setCurrentDay} />
    </div >
  );
}

export default App;
