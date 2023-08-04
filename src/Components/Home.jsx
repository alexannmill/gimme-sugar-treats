import React from 'react';
import { Container, Grid, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(4),
	},
	imageContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	image: {
		maxWidth: '100%',
		maxHeight: '100%',
	},
	writeupContainer: {
		padding: theme.spacing(4),
	},
}));

const Home = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={6} className={classes.imageContainer}>
					<img
						// src='path/to/your/image.jpg'
						alt='landing-img'
						className={classes.image}
					/>
				</Grid>
				<Grid item xs={12} sm={6} className={classes.writeupContainer}>
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
