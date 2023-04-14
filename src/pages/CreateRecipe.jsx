import { Autocomplete, Button, Container, Stack, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = process.env.REACT_APP_SERVER_URL;
// const url = 'http://127.0.0.1:3001/dishes/';

const CreateRecipe = () => {
	const navigate = useNavigate();
	const [ingredients, setIngredients] = useState([]);
	const [title, setTitle] = useState('untitled');

	const options = ['onion', 'meat']

	const onFormChange = (e, value) => {
		setIngredients(value);
	}

	const onTitleChange = (e, value) => {
		setTitle(e.target.value);
	}

	// does not post body
	const postDish = (dish) => {
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dish)
		})
			.then((response) => response.json())
			.then((json) => console.log(json))
	}

	const onButtonClick = (event) => {
		switch (event) {
			case 'cancel':
				navigate('/');
				break;
			case 'save':
				let dish = {
					'title': title,
					'ingredients': ingredients
				}
				postDish(dish);
				navigate('/');
				break;
			default:
				break;
		}
	}

	return (
		<Container maxWidth='md'>
			<Stack maxWidth='50%' margin='30vh auto' >
				<TextField onChange={onTitleChange} helperText='Title' variant='standard' />
				<Autocomplete
					multiple
					selectOnFocus
					options={options.map(option => option)}
					freeSolo
					onChange={onFormChange}
					renderInput={(params => <TextField {...params} helperText='Ingredients' variant='standard' />)} />
				<Stack margin='20px 0' direction='row' justifyContent='space-between'>
					<Button onClick={() => onButtonClick('cancel')} variant='outlined' endIcon={<DeleteIcon />}>Cancel</Button>
					<Button onClick={() => onButtonClick('save')} variant='contained' endIcon={<SaveIcon />}>Save</Button>
				</Stack>
			</Stack>
		</Container>
	)
}

export default CreateRecipe;