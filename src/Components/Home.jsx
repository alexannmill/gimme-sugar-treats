import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const Home = () => {
	// const classes = useStyles();

	return (
		<Container>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={6}>
					<img
						// src='path/to/your/image.jpg'
						alt='landing-img'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography variant='h4' component='h1' gutterBottom>
						Hi Friends!
					</Typography>
					<Typography variant='body1'>
						I wanted to start off with a bit about myself... I am a Cordon Bleu
						trained Pastry Chef recently turned mom
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;
