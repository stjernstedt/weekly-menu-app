import './App.css';
import { useState, useEffect } from 'react';
import DishesGrid from './components/DishesGrid';
import MenuBuilder from './components/MenuBuilder'
import { Drawer } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

// const url = 'http://127.0.0.1:3001/dishes/';
const url = process.env.REACT_APP_SERVER_URL

const App = () => {
  document.title = 'Weekly Dish';
  const [dishes, setDishes] = useState([]);
  const [currentDay, setCurrentDay] = useState(1);
  const [drawerState, setDrawerState] = useState(false);


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

  const toggleDrawer = (open) => {
    setDrawerState(open);
  }


  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className="App">
        <Drawer anchor='right' open={drawerState} onClose={() => toggleDrawer(false)}>
          <DishesGrid dishes={dishes} updateDishes={updateDishes} currentDay={currentDay} toggleDrawer={toggleDrawer} />
        </Drawer>
        <MenuBuilder setCurrentDay={setCurrentDay} toggleDrawer={toggleDrawer} />
        {/* <MenuBuilder /> */}
      </div >
    </LocalizationProvider>
  );
}

export default App;
