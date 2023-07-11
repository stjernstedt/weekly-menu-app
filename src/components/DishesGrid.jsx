import { Button, CircularProgress, Container, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import DishCard from './DishCard.jsx';

// const url = 'http://127.0.0.1:3001/dishes/';
const url = process.env.REACT_APP_SERVER_URL

const DishesGrid = ({ currentDay, toggleDrawer, addDishCallback }) => {
	const [dishes, setDishes] = useState([]);

	const fetchDishes = async (options) => {
		let response;
		options ? response = await fetch(url + '/' + options)
			: response = await fetch(url);
		const data = await response.json();

		setDishes(data)
	}

	const updateDishes = (ingredient) => {
		fetchDishes(ingredient);
	}

	useEffect(() => {
		fetchDishes();
	}, [])

	return (
		<Container maxWidth={'desktop'}>
			<Grid container columns={6} spacing={5} marginTop={'10vh'} paddingX={'5vh'}>
				{dishes?.length > 0
					? (
						<>
							{currentDay && toggleDrawer ? dishes.map((dish) => (
								<DishCard dish={dish} key={dish._id} updateDishes={updateDishes} currentDay={currentDay} toggleDrawer={toggleDrawer} addDishCallback={addDishCallback} />
							)) :
								dishes.map((dish) => (
									<DishCard dish={dish} key={dish._id} updateDishes={updateDishes} />
								))}
							<Grid item mobile={6} align={'center'}><Button onClick={() => { updateDishes() }}>Show all</Button></Grid>
						</>
					) : (
						<div className='empty'>
							<CircularProgress align='center' />
							{/* <h2>No dishes found</h2> */}
						</div>
					)}
			</Grid>
		</Container>
	)
}

export default DishesGrid;