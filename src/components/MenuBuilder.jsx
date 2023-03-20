import { Button, Grid } from "@mui/material";
import { useState } from "react";


const MenuBuilder = ({ setCurrentDay, toggleDrawer }) => {
	const months = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const [showDate, setShowDate] = useState(new Date());

	const getDaysInMonth = (year, month) => {
		return new Date(year, month + 1, 0).getDate();
	}

	let days = getDaysInMonth(showDate.getFullYear(), showDate.getMonth())

	const selectDay = (day) => {
		let selectedDate = new Date(showDate.getFullYear(), showDate.getMonth(), day + 1);
		setCurrentDay(selectedDate);
		toggleDrawer(true);
	}

	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center'
		}}>
			<Grid container width={'70vw'} columns={7} marginTop={5}>
				<Grid item xs={7} align={'center'}>
					<h2>	{months[showDate.getMonth()]}</h2>
				</Grid>
				{
					[...Array(days)].map((e, i) => {
						return <Grid key={i} padding={1} item xs={1}>
							{/* <Button sx={{ height: '4vw', width: '100%' }} variant='outlined' onClick={() => selectDay(i)}> */}
							<Button sx={{ height: '4vw', width: '100%' }} variant='outlined' onClick={() => selectDay(i)}>
								<Grid container>
									<Grid item xs={1}>
										<span>{i + 1}</span>
									</Grid>
									<Grid item xs={12}>
										<span id={'day' + (i + 1)}></span>
									</Grid>
								</Grid>
							</Button>
						</Grid>
					})
				}
			</Grid>
		</div >
	);
}

export default MenuBuilder;