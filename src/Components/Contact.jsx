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
	CircularProgress,
	Alert,
} from '@mui/material';

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
	const [error, setError] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
		setSubmitted(false);

		fetch(process.env.EMAIL_ENDPOINT, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				if (response.status === 200) {
					setSubmitted(true);
					setLoading(false);
				} else {
					setLoading(false);
					setError(
						'Unable to send your message, please ensure all the fields are filled out correctly'
					);
				}
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
					'url(' + require('./Images/Other/contact-bg.jpg') + ')',
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
			<Typography variant='h1' color='white'>
				Contact
			</Typography>
			<Grid container>
				<br />
				<Grid item xs={12} sm={6} sx={{ alignSelf: 'center' }}>
					<Typography variant='h6' color='white'>
						Have a question or want to place an order?
					</Typography>
					<br />
					<Typography variant='p' color='white' gutterBottom>
						* $20 delivery, MINIMUM 3 days for an order
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6}>
					{!submitted ? (
						<Box>
							{loading ? (
								<Box p={3} textAlign='center'>
									<CircularProgress size='8rem' color='primary' thickness={6} />
								</Box>
							) : (
								<>
									<FormLabel style={classes.textBoxes}>Name</FormLabel>
									<TextField
										variant='outlined'
										name='name'
										value={formData.name}
										onChange={handleChange}
										fullWidth
										margin='normal'
										required
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
										<Button
											onClick={(e) => sendEmail(e)}
											variant='contained'
											color='primary'
										>
											Submit
										</Button>
									</Box>
									{error && <Alert severity='error'>{error}</Alert>}
								</>
							)}
						</Box>
					) : (
						<Box p={3} bgcolor='lightgrey' borderRadius={3}>
							<Typography align='center' variant='h4'>
								Your message has been sent!🎉
							</Typography>
						</Box>
					)}
				</Grid>
			</Grid>
		</Box>
	);
};

export default Contact;
