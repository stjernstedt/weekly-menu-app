import { Button, Container, Stack } from "@mui/material";
import { Link } from 'react-router-dom';

const buttonStyle = {
	width: '10vw',
	height: '60px',
}

const Home = () => {

	return (
		<Container>
			<Stack margin='30vh 0' spacing={2} alignItems='center'>
				<Link to='createrecipe'>
					<Button sx={buttonStyle} variant='outlined'>Create Recipe</Button>
				</Link>
				<Link to='browserecipes'>
					<Button sx={buttonStyle} variant='outlined'>Browse Recipes</Button>
				</Link>
				<Link to='menubuilder'>
					<Button sx={buttonStyle} variant='outlined'>Create Menu</Button>
				</Link>
			</Stack>
		</Container>
	)
}

export default Home;