import React from 'react';
import {
	Box,
	CardMedia,
	Container,
	Grid,
	Typography,
	useTheme,
} from '@mui/material';
import Image from '../Images/home-img.png';

const Home = () => {
	const theme = useTheme();

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
				paddingTop: '1rem',
				backgroundAttachment: 'fixed',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Grid container spacing={4}>
				<Grid
					item
					sm={12}
					md={6}
					sx={{
						display: 'flex',
						alignItems: 'center',
						textAlign: 'center',
						padding: '0px',
					}}
				>
					<Box justifyContent='center' margin={2}>
						<img
							src={Image}
							alt='landing-img'
							style={{
								width: '70%',
							}}
						/>
					</Box>
				</Grid>
				<Grid
					item
					sm={12}
					md={6}
					style={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Box
						p={3}
						justifyContent='center'
						bgcolor='#cb997ea1'
						borderRadius='49% 51% 48% 52% / 52% 48% 51% 49%'
					>
						<Typography variant='h3' color='primary.dark' gutterBottom>
							Hi Friends!
						</Typography>
						<Typography variant='h6' color='primary.dark'>
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
