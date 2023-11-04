import React from 'react';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import Image from '../Images/home-img.png';

const Home = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundImage: 'url(' + require('../Images/background.png') + ')',
				backgroundColor: 'rgba(255, 255, 255, 0.5)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: '100%',
				padding: '0px',
			}}
		>
			{/* <Grid container spacing={4}>
				<Grid item xs={12} sm={6}> */}
			<img src={Image} alt='landing-img' />
			{/* </Grid>
				<Grid item xs={12} sm={6}> */}
			<Box
				display='display'
				ml='20rem'
				width='15rem'
				color='white'
				position='fixed'
			>
				<Typography variant='h4' component='h1' gutterBottom>
					Hi Friends!
				</Typography>
				<Typography variant='body1'>
					I wanted to start off with a bit about myself... I am a Cordon Bleu
					trained Pastry Chef recently turned mom.
				</Typography>
			</Box>
			{/* </Grid>
			</Grid> */}
		</Box>
	);
};

export default Home;
