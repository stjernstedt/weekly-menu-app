import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const DishCard = ({ dish: { _id, title, ingredients }, updateDishes, currentDay }) => {
	const addDish = (day) => {
		// let test = document.getElementById('day' + day.getDay());
		let test = document.getElementById('day' + day);
		test.textContent = title;
		console.log('dishcard fire');
	}

	return (
		<Grid item xs={2}>
			<Card>
				<CardContent>
					<Typography variant="h5">
						{title}
					</Typography>
					<Typography variant="h8">
						Ingredients: {ingredients.map(ingredient => {
							return (
								<Button key={ingredient} onClick={() => { updateDishes(ingredient) }}>{ingredient}</Button>
							);
						})}
					</Typography>
				</CardContent>
				<CardActions>
					<Button onClick={() => addDish(currentDay)}>ADD DISH</Button>
				</CardActions>
			</Card>

		</Grid >
	);
}

export default DishCard;