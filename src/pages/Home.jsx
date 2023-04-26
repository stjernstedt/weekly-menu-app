import { Container, Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const buttonStyle = {
	width: '10vw',
	height: '60px',
}

const Home = (props) => {

	return (
		<Container maxWidth='lg' >
			<Stack marginTop={'20vh'} direction='row' justifyContent='center'>
				<Paper sx={{ padding: '100px 20px', borderRadius: '100px' }} elevation={5}>
					<Typography variant='h1'>Weekly Menu Builder</Typography>
				</Paper>
			</Stack>
		</Container >
		// <Container>
		// 	<Stack margin='30vh 0' spacing={2} alignItems='center'>
		// 		<Link to='createrecipe'>
		// 			<Button sx={buttonStyle} variant='outlined'>Create Recipe</Button>
		// 		</Link>
		// 		<Link to='browserecipes'>
		// 			<Button sx={buttonStyle} variant='outlined'>Browse Recipes</Button>
		// 		</Link>
		// 		<Link to='menubuilder'>
		// 			<Button sx={buttonStyle} variant='outlined'>Create Menu</Button>
		// 		</Link>
		// 	</Stack>
		// </Container>
	)
}

export default Home;