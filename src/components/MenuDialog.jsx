import { Dialog, Divider, Paper, Stack, Typography } from "@mui/material";

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
				newDate.setDate(date.getDate() + 1);
				let dish;
				weeks[week][newDate] ? dish = weeks[week][newDate] : console.log('null');
				jsx.push(
					<>
						<Stack minWidth={'180px'} direction='row' justifyContent={'space-between'}>
							<Typography variant='h6'>{(newDate.getMonth() + 1) + '/' + newDate.getDate()}</Typography>
							<Typography variant='h6'>{weekDays[i]}</Typography>
						</Stack>
						<Typography margin={'5px'} variant='body1'>{dish ? dish.title : null}</Typography>
						<Divider />
					</>
				)
			}
		})

		return jsx;
	}

	return (
		<Dialog onClose={handleDialogClose} open={open}>
			<Paper sx={{ padding: '50px' }}>
				{displayMenu()}
			</Paper>
		</Dialog>
	)
}

export default MenuDialog;