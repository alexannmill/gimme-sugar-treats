import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import homeImg from './Images/home-img.png';
const classes = {
	container: {
		display: 'flex',
		backgroundImage: 'url(' + require('./Images/icing.png') + ')',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		minHeight: '100vh',
		padding: '2%',
		paddingLeft: '2rem',
	},
	title: {
		fontSize: '8vh',
		marginTop: '20%',
		color: 'white',
	},
};

const Home = () => {
	return (
		<Box sx={classes.container} id='home-container'>
			<Typography sx={classes.title} align='left'>
				GIMME SUGAR TREATS
			</Typography>
		</Box>
	);
};

export default Home;
