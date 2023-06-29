import { Button, Grid, Typography, styled } from "@mui/material";

const CalendarButton = styled(Button)({
	height: '5rem',
	padding: '0px',
	minWidth: '0px',
	width: '100%',
})

const CalendarPreviousMonthButton = styled(CalendarButton)({
	backgroundColor: 'lightgray',
})

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
				<Grid item mobile={1}>
					<span><Typography variant='body1'>{date.getDate()}</Typography></span>
				</Grid>
				<Grid item mobile={12}>
					<span id={date}><Typography variant='body2'>{currentMenu[date] ? currentMenu[date].title : null}</Typography></span>
				</Grid>
			</Grid>
		)
	}

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
				<Grid item key={'' + date.getFullYear() + (date.getMonth() - 1) + day} padding={1} mobile={1}>
					<CalendarPreviousMonthButton variant='outlined' onClick={() => onClickCallback(callbackDate)}>
						{dayJsx(callbackDate)}
					</CalendarPreviousMonthButton>
				</Grid>
			);
		}
	}

	// render month's days
	for (let i = 1; i <= days; i++) {
		let callbackDate = new Date(date.getFullYear(), date.getMonth(), + i)
		arr.push({ [callbackDate]: '1' });
		jsx.push(
			<Grid item key={'' + date.getFullYear() + (date.getMonth()) + i} padding={1} mobile={1}>
				<CalendarButton variant='outlined' onClick={() => onClickCallback(callbackDate)}>
					{dayJsx(callbackDate)}
				</CalendarButton>
			</Grid>
		);
	}

	return jsx;
}

export default Calendar;