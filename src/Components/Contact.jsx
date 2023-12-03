import React, { useState } from 'react';
import {
	Container,
	Typography,
	TextField,
	Button,
	Box,
	FormControl,
	Grid,
	Paper,
	FormLabel,
} from '@mui/material';
import Image from '../Images/Other/contact-bg.jpg';

const classes = {
	textBoxes: {
		color: 'white',
	},
	textField: {
		backgroundColor: '#e7e4e4',
	},
};
const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const sendEmail = () => {
		setLoading(true);
		setSubmitted(false);

		fetch(
			'https://public.herotofu.com/v1/ca7790a0-7e6a-11ed-b38f-a1ed22f366b1',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			}
		)
			.then((response) => {
				// Endpoint thinks that it's likely a spam/bot request, you need to change "spam protection mode" to "never" in HeroTofu forms
				if (response.status === 422) {
					setError('Are you robot?');
					throw new Error('Are you robot?');
				}

				if (response.status !== 200) {
					setError(`${response.statusText} (${response.status})`);
					throw new Error(`${response.statusText} (${response.status})`);
				}

				return response.json();
			})
			.then(() => {
				setSubmitted(true);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.toString());
				setLoading(false);
			});
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Box
			sx={{
				alignItems: 'center',
				justifyContent: 'center',
				backgroundImage:
					'url(' + require('../Images/Other/contact-bg.jpg') + ')',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				paddingTop: '1rem',
				backgroundAttachment: 'fixed',
				backgroundRepeat: 'no-repeat',
				height: 'inherit',
				minHeight: '100vh',
				padding: '5%',
			}}
		>
			<Typography variant='h1' color='white' align='center'>
				Contact Me
			</Typography>
			<Grid container sx={{ padding: '10%' }}>
				<br />
				<Grid
					item
					xs={12}
					sm={6}
					sx={{ alignSelf: 'center', justifyContent: 'center' }}
				>
					<Typography variant='h6' color='white'>
						Have a question or want to place an order?
					</Typography>
					<br />
					<Typography variant='p' color='white' gutterBottom>
						* $20 delivery, MINIMUM 3 days for an order
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6}>
					<form onSubmit={sendEmail} method='POST'>
						<FormLabel style={classes.textBoxes}>Name</FormLabel>
						<TextField
							variant='outlined'
							name='name'
							value={formData.name}
							onChange={handleChange}
							fullWidth
							margin='normal'
							required
							className={classes.textField}
							inputProps={{ style: classes.textBoxes }}
						/>
						<br />
						<FormLabel style={classes.textBoxes}>Email</FormLabel>
						<TextField
							name='email'
							type='email'
							inputProps={{ type: 'email', style: classes.textBoxes }}
							value={formData.email}
							onChange={handleChange}
							fullWidth
							margin='normal'
							required
						/>
						<br />
						<FormLabel style={classes.textBoxes}>Message</FormLabel>
						<TextField
							name='message'
							value={formData.message}
							onChange={handleChange}
							fullWidth
							margin='normal'
							multiline
							rows={4}
							required
							inputProps={{ style: classes.textBoxes }}
						/>
						<Box textAlign='right'>
							<Button type='submit' variant='contained' color='primary'>
								Submit
							</Button>
						</Box>
					</form>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Contact;
