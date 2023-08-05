import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import styled from 'styled-components';

const LandingContainer = styled(Container)`
	margin-top: 2rem;
`;

const ImageContainer = styled(Grid)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const WriteupContainer = styled(Grid)`
	padding: 2rem;
`;

const App = () => {
	return (
		<LandingContainer>
			<Grid container spacing={4}>
				<ImageContainer item xs={12} sm={6}>
					<Image src='path/to/your/image.jpg' alt='Image' />
				</ImageContainer>
				<WriteupContainer item xs={12} sm={6}>
					<Typography variant='h4' component='h1' gutterBottom>
						Your Heading
					</Typography>
					<Typography variant='body1'>
						Your write-up text goes here. This is where you can describe your
						product, service, or any other information you want to display on
						the landing page.
					</Typography>
				</WriteupContainer>
			</Grid>
		</LandingContainer>
	);
};

export default App;
