import React from 'react';
import { ImageList, ImageListItem, Typography } from '@mui/material';

function importAll(r) {
	let images = {};
	r.keys().forEach((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

const images = importAll(
	require.context('../Images', false, /\.(png|jpe?g|svg)$/)
);

const Gallery = () => {
	console.log('Img:', images);
	const itemData = Object.entries(images).map((e) => ({
		title: e[0],
		img: e[1],
	}));
	console.log('itemData:', itemData);

	return (
		<div>
			<Typography variant='h1' color='secondary' gutterBottom align='center'>
				GALLERY
			</Typography>
			<ImageList variant='masonry' cols={3} gap={8}>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<img
							src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
							alt={item.title}
							loading='lazy'
						/>
					</ImageListItem>
				))}
			</ImageList>
		</div>
	);
};

export default Gallery;
