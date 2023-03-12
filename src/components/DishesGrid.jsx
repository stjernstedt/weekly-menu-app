import { Grid } from '@mui/material';
import DishCard from './DishCard.jsx';

const DishesGrid = ({ dishes }) => {
	return (
		<Grid container spacing={5} justifyContent={'center'} marginTop={5}>
			{dishes?.length > 0
				? (
					<>
						{dishes.map((dish) => (
							<DishCard dish={dish} key={dish._id} setDishes={setDishes} fetchDishes={fetchDishes} />
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