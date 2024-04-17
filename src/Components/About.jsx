import React from 'react';
import {
	Box,
	CardMedia,
	Container,
	Grid,
	Typography,
	useTheme,
} from '@mui/material';
import homeImg from './Images/home-img.png';
const classes = {
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundImage: 'url(' + require('./Images/Other/background.png') + ')',
		backgroundImage: 'url(' + require('./Images/cinna.png') + ')',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		paddingTop: { xs: '15%', sm: '10%', md: '1%' },
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		minHeight: '100vh',
		padding: '5%',
	},
	gridImg: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
	},
	gridText: {
		display: 'flex',
		alignItems: 'center',
	},
	textContainer: {
		justifyContent: 'center',
		// bgcolor: '#ebeae7c2',
		// borderRadius: '59% 61% 58% 52% / 62% 58% 61% 59%',
		// boxShadow: '0 0 20px 10px #9d8981',
	},
	img: {
		width: '70%',
		borderRadius: '2rem',
		overflow: 'hidden',
		// boxShadow: '0 0 20px 10px #9d8981',
		// borderRadius: '59% 61% 58% 52% / 62% 58% 61% 59%',
	},
	bubble: {
		// borderRadius: '69% 61% 58% 62% / 62% 58% 61% 59%',
		bgcolor: '#ebeae7c2',
		// borderRadius: '2rem',
	},
};

const About = () => {
	return (
		<Box sx={classes.container} id='home-container'>
			<Grid container spacing={2} sx={classes.bubble}>
				<Grid item sm={12} md={6} sx={classes.gridImg}>
					<Box justifyContent='center'>
						<img src={homeImg} alt='landing-img' style={classes.img} />
					</Box>
				</Grid>
				<Grid item sm={12} md={6} sx={classes.gridText}>
					<Box p={1} sx={classes.textContainer}>
						<Typography variant='h3' color='primary.dark' gutterBottom>
							Hi Friends!
						</Typography>
						<Typography variant='h6' color='secondary.dark'>
							Wanted to start off with a bit about myself… I am a Cordon Bleu
							trained Pastry Chef recently turned Mom. I have a passion for
							hiking, music and food; yet Baking has always been my biggest
							love. 💝 I am excited for this adventure and bringing you all for
							the ride! 💕
							<br />
							<br />
							xo Love and Brownies
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12}></Grid>
			</Grid>
		</Box>
	);
};

export default About;
