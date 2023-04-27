import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { Drawer } from '@mui/material';
import DishesGrid from '../components/DishesGrid';
import Calendar from "../components/Calendar.jsx";
import './CreateMenu.css';

const CreateMenu = () => {
	const [currentDay, setCurrentDay] = useState(new Date());
	const [drawerState, setDrawerState] = useState(false);
	const [currentMenu, setCurrentMenu] = useState({});
	const [showDate, setShowDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));

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
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			marginTop: '10vh'
		}}>
			<Drawer anchor='right' open={drawerState} onClose={() => toggleDrawer(false)}>
				<DishesGrid currentDay={currentDay} toggleDrawer={toggleDrawer} addDishCallback={addDish} />
			</Drawer>

			<Grid container width={'70vw'} columns={7} marginTop={5}>
				<Grid item xs={7} align={'center'}>
					<h2>
						<Button onClick={() => setShowDate(new Date(showDate.getFullYear(), showDate.getMonth() - 1, 1))}>⇐</Button>
						{months[showDate.getMonth()]}
						<Button onClick={() => setShowDate(new Date(showDate.getFullYear(), showDate.getMonth() + 1, 1))}>⇒</Button>
					</h2>
				</Grid>
				<Calendar date={showDate} onClickCallback={selectDay} currentMenu={currentMenu} />
			</Grid>
		</div >
	);
}

export default CreateMenu;