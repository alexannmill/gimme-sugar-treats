import React, { useEffect, useState } from 'react';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';

// import all images in Images directory
function importAll(r) {
	let images = {};
	r.keys().forEach((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// require all imported images
const images = importAll(
	require.context('./Images', false, /\.(png|jpe?g|svg)$/)
);

const Gallery = () => {
	const [numberOfColumns, setNumberOfColumns] = useState(2);

	const handleResize = () => {
		const screenSize = window.screen.width;
		// dynamically change number of columns based on screen size
		const screenDivide = Math.round(screenSize / 400);
		//ensure at least 2 columns at all times
		const numColumns = screenDivide < 2 ? 2 : screenDivide;
		setNumberOfColumns(numColumns);
	};

	useEffect(() => {
		// event listener for window resize
		window.addEventListener('resize', handleResize);

		// cleanup: Remove the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	//process image data to img list formate
	const itemData = Object.entries(images).map((e) => ({
		title: e[0],
		img: e[1],
	}));

	return (
		<Box p='5%'>
			<Typography variant='h1' color='secondary' gutterBottom>
				GALLERY
			</Typography>
			<ImageList variant='masonry' cols={numberOfColumns} gap={10}>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<img
							src={`${item.img}?w=164&fit=crop&auto=format`}
							alt={item.title}
							loading='lazy'
							style={{
								borderRadius: '1rem',
								boxShadow: '0 0 2px 1px #9d8981',
							}}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};

export default Gallery;
