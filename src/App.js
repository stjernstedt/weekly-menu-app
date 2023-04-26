import './App.css';
import Home from './pages/Home';
import MenuBuilder from './pages/MenuBuilder';
import CreateRecipe from './pages/CreateRecipe';
import BrowseRecipes from './pages/BrowseRecipes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { AppBar, Button, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

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
        <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton size='large' color='inherit' sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' sx={{ flexGrow: 1 }}></Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar >
        <Drawer variant='permanent' sx={{ flexShrink: 0 }}>
          <Toolbar />
          <List>
            {/* does not work */}
            <ListItemButton LinkComponent={Link} to='/createrecipe'>
              <ListItemIcon>
                <AddBoxIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary='Add Recipe' />
            </ListItemButton>
            <ListItemButton LinkComponent={Link} to='/browserecipes'>
              <ListItemIcon>
                <BackupTableIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary='Browse Recipes' />
            </ListItemButton>
            <ListItemButton LinkComponent={Link} to='/menubuilder'>
              <ListItemIcon>
                <NoteAddIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary='Create Menu' />
            </ListItemButton>
          </List>
        </Drawer>

        <RouterProvider router={router} />
      </div >
    </LocalizationProvider>
  );
}

export default App;
