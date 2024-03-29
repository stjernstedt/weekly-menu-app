import { useState } from "react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Drawer } from '@mui/material';
import DishesGrid from '../components/DishesGrid';
import Calendar from "../components/Calendar.jsx";
import MenuDialog from "../components/MenuDialog";

// displays calendar where user can add dishes and print a menu
const CreateMenu = () => {
	const [currentDay, setCurrentDay] = useState(new Date());
	const [drawerState, setDrawerState] = useState(false);
	const [currentMenu, setCurrentMenu] = useState({});
	const [showDate, setShowDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
	const [open, setOpen] = useState(false);
	const [weeks, setWeeks] = useState({});

	const months = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	// const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const selectDay = (date) => {
		setCurrentDay(date);
		toggleDrawer(true);
	}

	const toggleDrawer = (open) => {
		setDrawerState(open);
	}

	const addDish = (dish) => {
		let tempMenu = currentMenu;
		tempMenu[currentDay] = dish;
		setCurrentMenu(tempMenu);
	}

	//BUG off by one
	// const calculateWeek = (date) => {
	// 	let year = new Date(date.getFullYear(), 0, 1);
	// 	let days = Math.floor((date - year) / (24 * 60 * 60 * 1000));
	// 	let week = Math.ceil((date.getDay() + 1 + days) / 7);
	// 	console.log(week);
	// }

	const printMenu = (menu) => {
		let tmpWeeks = {};
		Object.keys(menu).forEach((key) => {
			let tmpdate = new Date(key);
			let weekstartDiff = tmpdate.getDay() === 0 ? 6 : tmpdate.getDay() - 1;
			let weekstartDate = new Date(tmpdate.getFullYear(), tmpdate.getMonth(), tmpdate.getDate() - weekstartDiff);
			if (!tmpWeeks[weekstartDate]) tmpWeeks[weekstartDate] = {};
			tmpWeeks[weekstartDate][key] = menu[key]
		});
		setWeeks(tmpWeeks);
		setOpen(true);
	}

	const handleDialogClose = () => {
		setOpen(false);
	}

	// const drawFirstDayOfWeeks = (date) => {
	// 	const year = date.getFullYear();
	// 	const month = date.getMonth();
	// 	// let day = getDayOfWeek(new Date(year, month, 1));
	// 	let day = 1;

	// 	let jsx = [];
	// 	while (day <= getDaysInMonth(year, month)) {
	// 		let firstDay = (month + 1) + '/' + (new Date(year, month, day).getDate());
	// 		jsx.push(<Button sx={{ height: '4vw', width: '10%' }} variant='outlined' >{firstDay}</Button>);
	// 		day += (8 - new Date(year, month, day).getDay());
	// 	}

	// 	return jsx;
	// }

	return (
		<Container maxWidth={'100%'}>
			<Drawer PaperProps={{
				sx: {
					width: { mobile: '90%', tablet: '70%', desktop: '50%' }
				}
			}} anchor='right' open={drawerState} onClose={() => toggleDrawer(false)}>
				<DishesGrid currentDay={currentDay} toggleDrawer={toggleDrawer} addDishCallback={addDish} />
			</Drawer>
			<Stack alignItems={'center'} spacing={3} marginTop={5}>
				<Grid container width={{ mobile: '100%', desktop: '70%' }} columns={7} marginTop={5} border={1}>
					<Grid item mobile={7} align={'center'}>
						<Typography variant='h3'>
							<Button onClick={() => setShowDate(new Date(showDate.getFullYear(), showDate.getMonth() - 1, 1))}><Typography variant='h3'>⇐</Typography></Button>
							{months[showDate.getMonth()]}
							<Button onClick={() => setShowDate(new Date(showDate.getFullYear(), showDate.getMonth() + 1, 1))}><Typography variant='h3'>⇒</Typography></Button>
						</Typography>
					</Grid>
					<Calendar date={showDate} onClickCallback={selectDay} currentMenu={currentMenu} />
				</Grid>
				<Button variant='contained' onClick={() => printMenu(currentMenu)}>Print Menu</Button>
				<MenuDialog weeks={weeks} handleDialogClose={handleDialogClose} open={open} />
			</Stack>
		</Container >
	);
}

export default CreateMenu;