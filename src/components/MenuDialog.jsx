import { Dialog, Divider, Grid, Paper, Typography } from "@mui/material";

// returns a menu for every week with dishes added
const MenuDialog = ({ weeks, handleDialogClose, open }) => {

	const displayMenu = () => {
		const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		let jsx = [];

		Object.keys(weeks).forEach(week => {
			let date = new Date(week);
			jsx.push(
				<Typography variant='h5' key={date}>Week {date.getMonth() + 1}/{date.getDate()}</Typography>
			)

			for (let i = 0; i < 7; i++) {
				let newDate = date;
				let dish;
				weeks[week][newDate] ? dish = weeks[week][newDate] : console.log('null');
				jsx.push(
					<>
						<Grid container columns={2} marginBottom={'20px'}>
							<Grid item xs={1}>
								<Typography color={'gray'} variant='h6'>{(newDate.getMonth() + 1) + '/' + newDate.getDate()}</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography color={'gray'} align='right' variant='h6'>{weekDays[i]}</Typography>
							</Grid>
							<Grid item xs>
								<Typography align='right' variant='h6'>{dish ? dish.title : null}</Typography>
							</Grid>
						</Grid>
						<Divider />
					</>
				)
				newDate.setDate(date.getDate() + 1);
			}
			jsx.push(
				<Grid marginBottom={7} />
			)
		})

		return jsx;
	}

	return (
		<Dialog onClose={handleDialogClose} open={open}>
			<Paper sx={{ padding: '50px' }}>
				<Grid>
					{displayMenu()}
				</Grid>
			</Paper>
		</Dialog>
	)
}

export default MenuDialog;