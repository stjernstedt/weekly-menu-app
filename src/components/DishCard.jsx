import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

// const DishCard = ({ dish: { _id, title, ingredients }, updateDishes, currentDay, toggleDrawer, addDishCallback }) => {
const DishCard = ({ dish, updateDishes, currentDay, toggleDrawer, addDishCallback }) => {
	// rewrite to send dish back to menubuilder
	// const addDish = (day) => {
	// 	let test = document.getElementById(day);
	// 	test.textContent = title;
	// }

	return (
		<Grid item xs={2}>
			<Card>
				<CardContent>
					<Typography variant="h5">
						{dish.title}
					</Typography>
					<Typography variant="h8">
						Ingredients: {dish.ingredients.map(ingredient => {
							return (
								// <Button key={ingredient} onClick={() => updateDishes(ingredient)}>{ingredient}</Button>
								<Button key={ingredient} onClick={() => updateDishes(ingredient)}>{ingredient}</Button>
							);
						})}
					</Typography>
				</CardContent>
				<CardActions>
					{
						currentDay ?
							// (<Button onClick={() => { addDish(currentDay); toggleDrawer(false) }}>ADD DISH</Button>)
							(<Button onClick={() => { addDishCallback(dish); toggleDrawer(false) }}>ADD DISH</Button>)
							: null
					}
				</CardActions>
			</Card>

		</Grid >
	);
}

export default DishCard;