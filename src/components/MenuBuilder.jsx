import { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import { Drawer } from '@mui/material';
import DishesGrid from './DishesGrid.jsx';
import Calendar from "./Calendar.jsx";
import './MenuBuilder.css';

const url = process.env.REACT_APP_SERVER_URL

const MenuBuilder = () => {
	const [dishes, setDishes] = useState([]);
	const [currentDay, setCurrentDay] = useState(1);
	const [drawerState, setDrawerState] = useState(false);

	const months = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	// const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const [showDate, setShowDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));

	const fetchDishes = async (options) => {
		let response;
		options ? response = await fetch(url + '/' + options)
			: response = await fetch(url);
		const data = await response.json();

		setDishes(data)
	}

	const updateDishes = (ingredient) => {
		fetchDishes(ingredient);
	}

	useEffect(() => {
		fetchDishes();
	}, [])

	const selectDay = (day) => {
		let selectedDate = new Date(showDate.getFullYear(), showDate.getMonth(), day);
		setCurrentDay(selectedDate);
		toggleDrawer(true);
	}

	const toggleDrawer = (open) => {
		setDrawerState(open);
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
			justifyContent: 'center'
		}}>
			<Drawer anchor='right' open={drawerState} onClose={() => toggleDrawer(false)}>
				<DishesGrid dishes={dishes} updateDishes={updateDishes} currentDay={currentDay} toggleDrawer={toggleDrawer} />
			</Drawer>

			<Grid container width={'70vw'} columns={7} marginTop={5}>
				<Grid item xs={7} align={'center'}>
					<h2>
						<Button onClick={() => setShowDate(new Date(showDate.getFullYear(), showDate.getMonth() - 1, 1))}>⇐</Button>
						{months[showDate.getMonth()]}
						<Button onClick={() => setShowDate(new Date(showDate.getFullYear(), showDate.getMonth() + 1, 1))}>⇒</Button>
					</h2>
				</Grid>
				<Calendar date={showDate} onClickCallback={selectDay} />
			</Grid>
		</div >
	);
}

export default MenuBuilder;