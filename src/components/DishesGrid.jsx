import { Button, CircularProgress, Grid } from '@mui/material';
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
		<Grid container spacing={5} justifyContent={'center'} marginTop={'10vh'}>
			{dishes?.length > 0
				? (
					<>
						<Button onClick={() => { updateDishes() }}>Show all</Button>
						{currentDay && toggleDrawer ? dishes.map((dish) => (
							<DishCard dish={dish} key={dish._id} updateDishes={updateDishes} currentDay={currentDay} toggleDrawer={toggleDrawer} addDishCallback={addDishCallback} />
						)) :
							dishes.map((dish) => (
								<DishCard dish={dish} key={dish._id} updateDishes={updateDishes} />
							))}
					</>
				) : (
					<div className='empty'>
						<CircularProgress />
						{/* <h2>No dishes found</h2> */}
					</div>
				)}
		</Grid>
	)
}

export default DishesGrid;