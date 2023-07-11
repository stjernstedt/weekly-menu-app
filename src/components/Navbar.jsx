import { Link } from 'react-router-dom';
import { AppBar, Button, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';

const Navbar = () => {
	// const drawerType = window.innerWidth < 500 ? 'temporary' : 'permanent';
	// const [open, setOpen] = useState(drawerType === 'temporary' ? false : true);
	const [open, setOpen] = useState(false);

	const drawerContent = () => {
		return (
			<div onClick={() => setOpen(false)}>
				<Toolbar />
				<List>
					<ListItemButton LinkComponent={Link} to='/#/createrecipe'>
						<ListItemIcon>
							<CreateIcon color='primary' />
						</ListItemIcon>
						<ListItemText primary='Add Recipe' />
					</ListItemButton>
					<ListItemButton LinkComponent={Link} to='/#/browserecipes'>
						<ListItemIcon>
							<BackupTableIcon color='primary' />
						</ListItemIcon>
						<ListItemText primary='Browse Recipes' />
					</ListItemButton>
					<ListItemButton LinkComponent={Link} to='/#/createmenu'>
						<ListItemIcon>
							<NoteAddIcon color='primary' />
						</ListItemIcon>
						<ListItemText primary='Create Menu' />
					</ListItemButton>
				</List>
			</div>
		)
	}

	return (
		<>
			<AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<IconButton size='large' color='inherit' sx={{ mr: 2 }} onClick={() => setOpen(true)}>
						<MenuIcon />
					</IconButton>
					<Button LinkComponent={Link} to='/#/' variant='text' color='inherit'>Weekly Menu</Button>
					<Typography variant='h6' sx={{ flexGrow: 1 }}></Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar >
			{/* <Drawer variant='permanent' sx={{ flexShrink: 0 }}> */}
			{/* <Drawer open={open} variant={drawerType} sx={{ flexShrink: 0 }} onClose={() => setOpen(false)}> */}
			<Drawer open={open} variant='permanent' sx={{ flexShrink: 0, display: { mobile: 'none', desktop: 'block' } }} onClose={() => setOpen(false)}>
				{drawerContent()}
			</Drawer>
			<Drawer open={open} variant='temporary' sx={{ flexShrink: 0, display: { mobile: 'block', desktop: 'none' } }} onClose={() => setOpen(false)}>
				{drawerContent()}
			</Drawer>
		</>
	);
}

export default Navbar;