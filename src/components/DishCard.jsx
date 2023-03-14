import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const DishCard = ({ dish: { _id, title, ingredients }, onClick }) => {

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
								<Button key={ingredient} onClick={() => { onClick(ingredient) }}>{ingredient}</Button>
							);
						})}
					</Typography>
				</CardContent>
				<CardActions>
					<Button>ADD DISH</Button>
				</CardActions>
			</Card>

		</Grid >
	);
}

export default DishCard;