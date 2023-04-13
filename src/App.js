import './App.css';
import Home from './pages/Home';
import MenuBuilder from './pages/MenuBuilder';
import CreateRecipe from './pages/CreateRecipe';
import BrowseRecipes from './pages/BrowseRecipes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/createrecipe',
    element: <CreateRecipe />
  },
  {
    path: '/browserecipes',
    element: <BrowseRecipes />
  },
  {
    path: '/menubuilder',
    element: <MenuBuilder />
  },

])

const App = () => {
  document.title = 'Weekly Dish';

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className="App">
        <RouterProvider router={router} />
      </div >
    </LocalizationProvider>
  );
}

export default App;
