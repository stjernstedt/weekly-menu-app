import { Autocomplete, Button, Container, Stack, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from "react";

const CreateRecipe = () => {
	const [ingredients, setIngredients] = useState([]);

	const options = ['onion', 'meat']

	const onFormChange = (e, value) => {
		setIngredients(value);
	}

	return (
		<Container maxWidth='xs'>
			<Stack margin='30vh 0'>
				<TextField helperText='Title' variant='standard' />
				<Autocomplete
					multiple
					selectOnFocus
					options={options.map(option => option)}
					freeSolo
					onChange={onFormChange}
					renderInput={(params => <TextField {...params} helperText='Ingredients' variant='standard' />)} />
				<Stack margin='20px 0' direction='row' justifyContent='space-between'>
					{/* TODO handle button clicks */}
					<Button variant='outlined' endIcon={<DeleteIcon />}>Delete</Button>
					<Button variant='contained' endIcon={<SaveIcon />}>Save</Button>
				</Stack>
			</Stack>
		</Container>
	)
}

export default CreateRecipe;