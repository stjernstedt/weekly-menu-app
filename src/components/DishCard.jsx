import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const DishCard = ({ dish, updateDishes, currentDay, toggleDrawer, addDishCallback }) => {

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
								<Button key={ingredient} onClick={() => updateDishes(ingredient)}>{ingredient}</Button>
							);
						})}
					</Typography>
				</CardContent>
				<CardActions>
					{
						currentDay ?
							(<Button onClick={() => { addDishCallback(dish); toggleDrawer(false) }}>ADD DISH</Button>)
							: null
					}
				</CardActions>
			</Card>

		</Grid >
	);
}

export default DishCard;