import { Button, Grid } from "@mui/material";
import { useState } from "react";


const MenuBuilder = () => {
	const months = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const [currentDate, setCurrentDate] = useState(new Date());

	const getDaysInMonth = (year, month) => {
		return new Date(year, month + 1, 0).getDate();
	}

	let days = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())

	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center'
		}}>
			<Grid container width={'70vw'} columns={7} marginTop={5}>
				<Grid item xs={7} align={'center'}>
					<h2>	{months[currentDate.getMonth()]}</h2>
				</Grid>
				{
					[...Array(days)].map((e, i) => {
						return <Grid key={i} padding={1} item xs={1}>
							<Button sx={{ height: '4vw', width: '100%' }} variant='outlined' onClick={() => { console.log('clicked') }}>
								<Grid container>
									<Grid item xs={1}>
										{i + 1}
									</Grid>
									<Grid item xs={12}>
										{/* add some kind of modifiable text */}
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