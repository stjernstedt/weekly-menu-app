import './App.css';
import MenuBuilder from './components/MenuBuilder'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const url = 'http://127.0.0.1:3001/dishes/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuBuilder />
  },

])

const App = () => {
  document.title = 'Weekly Dish';

  // const routeResult = useRoutes(routes)

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className="App">
        <RouterProvider router={router} />
      </div >
    </LocalizationProvider>
  );
}

export default App;
