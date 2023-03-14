import { Button, Grid } from '@mui/material';
import DishCard from './DishCard.jsx';

const DishesGrid = ({ dishes, onClick }) => {
	return (
		<Grid container spacing={5} justifyContent={'center'} marginTop={5}>
			{dishes?.length > 0
				? (
					<>
						<Button onClick={() => { onClick() }}>Show all</Button>
						{dishes.map((dish) => (
							<DishCard dish={dish} key={dish._id} onClick={onClick} />
						))}
					</>
				) : (
					<div className='empty'>
						<h2>No dishes found</h2>
					</div>
				)}
		</Grid>
	)
}

export default DishesGrid;