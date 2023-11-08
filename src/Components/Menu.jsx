import { Typography } from '@mui/material';
import React from 'react';
import MenuImg from '../Images/menu.png';

const Menu = () => {
	return (
		<div>
			<Typography variant='h1'>Current Menu</Typography>
			<img
				src={MenuImg}
				alt='current-menu'
				style={{ width: 'clamp(10rem, 50rem, 50rem)' }}
			/>
		</div>
	);
};

export default Menu;
