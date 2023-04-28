import './App.css';
import Home from './pages/Home';
import CreateMenu from './pages/CreateMenu';
import CreateRecipe from './pages/CreateRecipe';
import BrowseRecipes from './pages/BrowseRecipes';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  document.title = 'Weekly Menu';

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/createrecipe' element={<CreateRecipe />} />
        <Route path='/browserecipes' element={<BrowseRecipes />} />
        <Route path='/createmenu' element={<CreateMenu />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div >
  );
}

export default App;
