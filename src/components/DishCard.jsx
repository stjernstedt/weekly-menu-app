import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const DishCard = ({ dish: { _id, title, ingredients } }) => {

	return (
		<Grid item xs={2}>
			<Card>
				<CardContent>
					<Typography variant="h5">
						{title}
					</Typography>
					<Typography variant="h7">
						Ingredients: {ingredients.map(ingredient => {
							return ([
								<a key={ingredient} href={'/dishes/' + ingredient}>{ingredient}</a>,
								', '
							]);
						})}
					</Typography>

				</CardContent>
			</Card>

		</Grid >
	);
}

export default DishCard;