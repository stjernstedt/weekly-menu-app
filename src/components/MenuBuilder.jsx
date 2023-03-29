import { Button, Grid } from "@mui/material";
import { useState } from "react";
import './Calendar.jsx';
import Calendar from "./Calendar.jsx";
import './MenuBuilder.css';

const MenuBuilder = ({ setCurrentDay, toggleDrawer }) => {

	const months = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	// const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const [showDate, setShowDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));

	const selectDay = (day) => {
		let selectedDate = new Date(showDate.getFullYear(), showDate.getMonth(), day);
		setCurrentDay(selectedDate);
		toggleDrawer(true);
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