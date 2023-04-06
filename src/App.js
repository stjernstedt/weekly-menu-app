import './App.css';
import MenuBuilder from './pages/MenuBuilder'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
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
