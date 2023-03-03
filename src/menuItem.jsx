import { Card } from "@mui/material";
import React from "react";

const menuItem = ({item: text}) => {
	return (
		<div key={item}>
			<Card>
				<h1>Item: {text}</h1>
			</Card>
		</div>
	);
}

export default menuItem;