import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const DishCard = ({ dish, updateDishes, currentDay, toggleDrawer, addDishCallback }) => {

	return (
		<Grid item mobile={3} desktop={2}>
			<Card>
				<CardContent>
					<Typography variant="h5">
						{dish.title}
					</Typography>
					<Typography variant="body1">
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