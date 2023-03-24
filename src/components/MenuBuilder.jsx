import { Button, Grid } from "@mui/material";
import { display } from "@mui/system";
import { weekdays } from "moment";
import { useState } from "react";


const MenuBuilder = ({ setCurrentDay, toggleDrawer }) => {

	const months = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const [showDate, setShowDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));

	const getDaysInMonth = (year, month) => {
		return month == 0 ? 31
			: new Date(year, month + 1, 0).getDate()
	}


	const selectDay = (day) => {
		let selectedDate = new Date(showDate.getFullYear(), showDate.getMonth(), day);
		setCurrentDay(selectedDate);
		toggleDrawer(true);
	}

	// create module that takes a callback function etc
	const drawMonth = (date) => {
		let days = getDaysInMonth(showDate.getFullYear(), showDate.getMonth());

		let jsx = [];

		if (date.getDay() != 1) {
			let monthBeforeDays = getDaysInMonth(date.getFullYear(), date.getMonth() - 1)

			let daysToLoop;
			date.getDay() == 0 ? daysToLoop = 6
				: daysToLoop = date.getDay() - 1;

			for (let i = 0; i < daysToLoop; i++) {
				let day = monthBeforeDays - i;
				jsx.unshift(
					<Grid item key={date.getFullYear() + (date.getMonth() - 1) + day} padding={1} xs={1}>
						<Button sx={{ height: '4vw', width: '100%', backgroundColor: 'lightgray' }} variant='outlined' onClick={() => selectDay(day)}>
							<Grid container>
								<Grid item xs={1}>
									<span>{day}</span>
								</Grid>
								<Grid item xs={12}>
									<span id={'day' + (day)}></span>
								</Grid>
							</Grid>
						</Button>
					</Grid>
				);
			}
		}

		for (let i = 1; i <= days; i++) {
			jsx.push(
				<Grid item key={i} padding={1} xs={1}>
					<Button sx={{ height: '4vw', width: '100%' }} variant='outlined' onClick={() => selectDay(i)}>
						<Grid container>
							<Grid item xs={1}>
								<span>{i}</span>
							</Grid>
							<Grid item xs={12}>
								<span id={'day' + (i)}></span>
							</Grid>
						</Grid>
					</Button>
				</Grid>
			);
		}

		return jsx;
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
				{
					drawMonth(showDate)
				}
			</Grid>
		</div >
	);
}

export default MenuBuilder;