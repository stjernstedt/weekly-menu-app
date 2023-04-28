import { Container, Paper, Stack, Typography } from '@mui/material';

const Home = () => {

	return (
		<Container maxWidth='lg' >
			<Stack marginTop={'20vh'} direction='row' justifyContent='center'>
				<Paper sx={{ padding: '100px 20px', borderRadius: '100px' }} elevation={5}>
					<Typography variant='h1'>Weekly Menu</Typography>
				</Paper>
			</Stack>
		</Container >
	)
}

export default Home;