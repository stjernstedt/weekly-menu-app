import { Button, Grid } from "@mui/material";

const Calendar = ({ date, onClickCallback, currentMenu }) => {

	const getDaysInMonth = (year, month) => {
		return month === 0 ? 31
			: new Date(year, month + 1, 0).getDate()
	}

	let days = getDaysInMonth(date.getFullYear(), date.getMonth());
	let jsx = [];

	const dayJsx = (date) => {
		return (
			<Grid container>
				<Grid item xs={1}>
					<span>{date.getDate()}</span>
				</Grid>
				<Grid item xs={12}>
					{/* find how to update */}
					<span id={date}>{currentMenu[date] ? currentMenu[date].title : null}</span>
				</Grid>
			</Grid>
		)
	}

	let monthClass = 'dayButton';
	let previousMonthClass = 'dayButtonPreviousMonth dayButton';

	let arr = [];
	// if the 1st is not monday, render previous month's days
	if (date.getDay() !== 1) {
		let monthBeforeDays = getDaysInMonth(date.getFullYear(), date.getMonth() - 1)

		let daysToLoop;
		date.getDay() === 0 ? daysToLoop = 6
			: daysToLoop = date.getDay() - 1;

		for (let i = 0; i < daysToLoop; i++) {
			let day = monthBeforeDays - i;
			let callbackDate = new Date(date.getFullYear(), date.getMonth() - 1, + day)
			arr.push({ [callbackDate]: '1' });
			jsx.unshift(
				<Grid item key={'' + date.getFullYear() + (date.getMonth() - 1) + day} padding={1} xs={1}>
					<Button className={previousMonthClass} variant='outlined' onClick={() => onClickCallback(callbackDate)}>
						{dayJsx(callbackDate)}
					</Button>
				</Grid>
			);
		}
	}

	// render month's days
	for (let i = 1; i <= days; i++) {
		let callbackDate = new Date(date.getFullYear(), date.getMonth(), + i)
		arr.push({ [callbackDate]: '1' });
		jsx.push(
			<Grid item key={'' + date.getFullYear() + (date.getMonth()) + i} padding={1} xs={1}>
				<Button className={monthClass} variant='outlined' onClick={() => onClickCallback(callbackDate)}>
					{dayJsx(callbackDate)}
				</Button>
			</Grid>
		);
	}

	return jsx;
}

export default Calendar;