import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuImg from '../Images/Other/menu.jpeg';

const Menu = () => {
	// useEffect(() => {
	// 	// Trigger animation on component load
	// 	// You can adjust the animation properties as per your requirement
	// 	const imgVariants = {
	// 		initial: { scale: 0.8, opacity: 0 },
	// 		animate: { scale: 1, opacity: 1, transition: { duration: 3.5 } },
	// 	};

	// 	const imgAnimationControls = {
	// 		initial: 'initial',
	// 		animate: 'animate',
	// 	};

	// 	setAnimationControls(imgAnimationControls);
	// 	setVariants(imgVariants);
	// }, []);

	// const [animationControls, setAnimationControls] = React.useState({});
	// const [variants, setVariants] = React.useState({});

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			p='5%'
			sx={{
				backgroundImage: 'url(' + require('../Images/Other/wood-bg.jpg') + ')',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
				backgroundRepeat: 'no-repeat',
				minHeight: '100vh',
				// background: 'rgb(244,217,173)',
				// background:
				// 	'radial-gradient(circle, rgba(244,217,173,1) 4%, rgba(229,198,157,1) 10%, rgba(213,179,141,1) 17%, rgba(199,163,127,1) 29%, rgba(179,138,106,1) 36%, rgba(137,90,65,1) 51%, rgba(122,81,59,1) 63%, rgba(108,73,53,1) 84%, rgba(84,59,43,1) 100%)',
			}}
		>
			<Typography variant='h1' gutterBottom align='center' color='#f4d9ad'>
				CURRENT MENU
			</Typography>
			<div
				style={{
					width: 'clamp(20rem, 70vw, 40rem)',
					borderRadius: '1rem',
					overflow: 'hidden',
					boxShadow: '0 0 20px 10px rgba(0, 0, 0, 0.5)',
				}}
			>
				<motion.img
					src={MenuImg}
					alt='current-menu'
					style={{
						width: 'clamp(20rem, 70vw, 40rem)',
						borderRadius: '1rem',
					}}
					initial={{ scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}
				/>
			</div>
		</Box>
	);
};

export default Menu;
