import { Button, Grid } from "@mui/material";

const Calendar = ({ date, onClickCallback }) => {
	const getDaysInMonth = (year, month) => {
		return month === 0 ? 31
			: new Date(year, month + 1, 0).getDate()
	}

	let days = getDaysInMonth(date.getFullYear(), date.getMonth());
	let jsx = [];

	const dayJsx = (day) => {
		return (
			<Grid container>
				<Grid item xs={1}>
					<span>{day}</span>
				</Grid>
				<Grid item xs={12}>
					<span id={'day' + (day)}></span>
				</Grid>
			</Grid>
		)
	}

	let monthClass = 'dayButton';
	let previousMonthClass = 'dayButtonPreviousMonth dayButton';

	// if the 1st is not monday, render previous month's days
	if (date.getDay() !== 1) {
		let monthBeforeDays = getDaysInMonth(date.getFullYear(), date.getMonth() - 1)

		let daysToLoop;
		date.getDay() === 0 ? daysToLoop = 6
			: daysToLoop = date.getDay() - 1;

		for (let i = 0; i < daysToLoop; i++) {
			let day = monthBeforeDays - i;
			jsx.unshift(
				<Grid item key={'' + date.getFullYear() + (date.getMonth() - 1) + day} padding={1} xs={1}>
					<Button className={previousMonthClass} variant='outlined' onClick={() => onClickCallback(day)}>
						{dayJsx(day)}
					</Button>
				</Grid>
			);
		}
	}

	// render month's days
	for (let i = 1; i <= days; i++) {
		jsx.push(
			<Grid item key={'' + date.getFullYear() + (date.getMonth()) + i} padding={1} xs={1}>
				<Button className={monthClass} variant='outlined' onClick={() => onClickCallback(i)}>
					{dayJsx(i)}
				</Button>
			</Grid>
		);
	}

	return jsx;
}

export default Calendar;