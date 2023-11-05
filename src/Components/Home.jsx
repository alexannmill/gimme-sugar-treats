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
				height: '91vh',
				paddingTop: '1rem',
				backgroundAttachment: 'fixed',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Grid container spacing={4}>
				<Grid
					item
					xs={12}
					sm={6}
					style={{
						display: 'flex',
						alignItems: 'center',
						textAlign: 'center',
						// padding: '0px',
					}}
				>
					<Box justifyContent='center'>
						<img
							src={Image}
							alt='landing-img'
							style={{
								width: '70%',
								borderRadius: '49% 51% 48% 52% / 52% 48% 51% 49%',
							}}
						/>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					style={{
						display: 'flex',
						alignItems: 'center',
						// padding: '1rem, 0rem',
					}}
				>
					<Box
						p={3}
						justifyContent='center'
						bgcolor='#cb997ea1'
						borderRadius='2rem'
					>
						<Typography variant='h4' component='h1' gutterBottom>
							Hi Friends!
						</Typography>
						<Typography variant='body1'>
							Wanted to start off with a bit about myself…I am a Cordon Bleu
							trained Pastry Chef recently turned Mom. I have a passion for
							hiking, music and food; yet Baking has always been my biggest
							love. 🤍 I am excited for this adventure and bringing you all for
							the ride! 💕xo Love and Brownies
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
