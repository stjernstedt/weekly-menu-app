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
					<div key={Math.random() + i}>
						<Grid container columns={2} marginBottom={'20px'}>
							<Grid item mobile={1}>
								<Typography color={'gray'} variant='h6'>{(newDate.getMonth() + 1) + '/' + newDate.getDate()}</Typography>
							</Grid>
							<Grid item mobile={1}>
								<Typography color={'gray'} align='right' variant='h6'>{weekDays[i]}</Typography>
							</Grid>
							<Grid item mobile={2}>
								<Typography align='right' variant='h6'>{dish ? dish.title : null}</Typography>
							</Grid>
						</Grid>
						<Divider />
					</div>
				)
				newDate.setDate(date.getDate() + 1);
			}
			jsx.push(
				<Grid key={Math.random()} marginBottom={7} />
			)
		})

		return jsx;
	}

	return (
		<Dialog onClose={handleDialogClose} open={open}>
			<Paper >
				<Grid margin={'5%'}>
					{displayMenu()}
				</Grid>
			</Paper>
		</Dialog>
	)
}

export default MenuDialog;