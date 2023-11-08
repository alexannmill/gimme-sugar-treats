import React from 'react';
import { ImageList, ImageListItem, Typography } from '@mui/material';

const Gallery = () => {
	const itemData = [];
	return (
		<div>
			<Typography variant='h1'>GALLERY</Typography>
			{/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<img
							srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
							alt={item.title}
							loading='lazy'
						/>
					</ImageListItem>
				))}
			</ImageList> */}
		</div>
	);
};

export default Gallery;
