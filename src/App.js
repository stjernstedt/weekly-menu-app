import './App.css';
import Home from './pages/Home';
import CreateMenu from './pages/CreateMenu';
import CreateRecipe from './pages/CreateRecipe';
import BrowseRecipes from './pages/BrowseRecipes';
import { Link, Routes, Route } from 'react-router-dom';
import { AppBar, Button, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreateIcon from '@mui/icons-material/Create';

const App = () => {
  document.title = 'Weekly Menu';

  return (
    <div className="App">
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton size='large' color='inherit' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Button LinkComponent={Link} to='/' variant='text' color='inherit'>Weekly Menu</Button>
          <Typography variant='h6' sx={{ flexGrow: 1 }}></Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar >
      <Drawer variant='permanent' sx={{ flexShrink: 0 }}>
        <Toolbar />
        <List>
          <ListItemButton LinkComponent={Link} to='/createrecipe'>
            <ListItemIcon>
              <CreateIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary='Add Recipe' />
          </ListItemButton>
          <ListItemButton LinkComponent={Link} to='/browserecipes'>
            <ListItemIcon>
              <BackupTableIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary='Browse Recipes' />
          </ListItemButton>
          <ListItemButton LinkComponent={Link} to='/createmenu'>
            <ListItemIcon>
              <NoteAddIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary='Create Menu' />
          </ListItemButton>
        </List>
      </Drawer>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createrecipe' element={<CreateRecipe />} />
        <Route path='/browserecipes' element={<BrowseRecipes />} />
        <Route path='/createmenu' element={<CreateMenu />} />
      </Routes>
    </div >
  );
}

export default App;
