import { Typography } from '@mui/material';
import React from 'react';
import MenuImg from '../Images/Other/menu.png';

const Menu = () => {
	return (
		<div>
			<Typography variant='h1'>Current Menu</Typography>
			<img
				src={MenuImg}
				alt='current-menu'
				style={{ width: 'clamp(100vw, 100vw, 20rem)' }}
			/>
		</div>
	);
};

export default Menu;
