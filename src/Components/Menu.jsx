import { Box, Typography } from '@mui/material';
import React from 'react';
import MenuImg from '../Images/Other/menu.png';

const Menu = () => {
	return (
		<Box
			justifyContent='center'
			display='flex'
			flexDirection='column'
			alignItems='center'
			p={3}
		>
			<Typography
				variant='h1'
				gutterBottom
				align='center'
				color='secondary.dark'
			>
				Current Menu
			</Typography>
			<img
				src={MenuImg}
				alt='current-menu'
				style={{
					width: 'clamp(80vw, 80vw, 20rem)',
				}}
			/>
		</Box>
	);
};

export default Menu;
