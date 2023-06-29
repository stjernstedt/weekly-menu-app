import './App.css';
import Home from './pages/Home';
import CreateMenu from './pages/CreateMenu';
import CreateRecipe from './pages/CreateRecipe';
import BrowseRecipes from './pages/BrowseRecipes';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
theme = responsiveFontSizes(theme);

const App = () => {
  document.title = 'Weekly Menu';

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path='/createrecipe' element={<CreateRecipe />} />
          <Route path='/browserecipes' element={<BrowseRecipes />} />
          <Route path='/createmenu' element={<CreateMenu />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div >
  );
}

export default App;
