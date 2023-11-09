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
			<Typography variant='h1'>GALLERY</Typography>
			<ImageList
				variant='masonry'
				cols={{ xs: 2, sm: 4, md: 6, lg: 8 }}
				rowHeight='20vh'
			>
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
