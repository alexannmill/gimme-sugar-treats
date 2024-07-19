import React, { useState } from 'react';
import {
	Typography,
	TextField,
	Button,
	Box,
	Grid,
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
	background: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundImage: 'url(' + require('./Images/Other/contact-bg.jpg') + ')',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		paddingTop: '1rem',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		height: 'inherit',
		minHeight: '80vh',
		padding: '5%',
	},
	botBlock: {
		textIndent: '-99999px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		position: 'absolute',
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
	const [errorMsg, setErrorMsg] = useState({});

	const validateFormData = () => {
		setError(false);
		let formErrors = {};
		if (!formData.name) {
			formErrors.name = 'Please enter your name';
		} else if (!formData.message) {
			formErrors.message = 'Please enter a message';
		} else if (!formData.email) {
			formErrors.email = 'Please enter an email address';
		} else if (
			!formData.email.match(
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			)
		) {
			formErrors.email = 'Please enter a valid email address';
		}
		setErrorMsg({ ...formErrors });
		if (Object.keys(formErrors).length > 0) {
			setError(true);
			return false;
		} else {
			setError(false);
			return true;
		}
	};

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
		const valid = validateFormData();
		if (valid) {
			console.log(
				'process.env.EMAIL_ENDPOINT:',
				process.env.REACT_APP_EMAIL_ENDPOINT
			);
			fetch(process.env.REACT_APP_EMAIL_ENDPOINT, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
				.then((response) => {
					console.log('response:', response);
					if (response.status === 200) {
						setSubmitted(true);
						setLoading(false);
					} else {
						setLoading(false);
						setError(true);
						setErrorMsg({
							return: 'Unable to send your message',
						});
					}
				})
				.catch((err) => {
					setError(err.toString());
					setLoading(false);
				});
		}
		setLoading(false);
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<Box sx={classes.background}>
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
								<form>
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
										error={error && errorMsg.name}
										helperText={error && errorMsg.name}
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
										error={error && errorMsg.email}
										helperText={error && errorMsg.email}
									/>
									<br />
									<FormLabel style={classes.textBoxes}>Message</FormLabel>
									<TextField
										name='message'
										value={formData.message}
										onChange={handleChange}
										fullWidth
										margin='normal'
										required
										multiline
										rows={4}
										inputProps={{ style: classes.textBoxes }}
										error={error && errorMsg.message}
										helperText={error && errorMsg.message}
									/>
									{/* handle bots */}
									<div style={classes.botBlock} aria-hidden='true'>
										<input
											type='text'
											name='_gotcha'
											tabIndex='-1'
											autoComplete='off'
										/>
									</div>
									<Box textAlign='right'>
										<Button
											onClick={(e) => sendEmail(e)}
											variant='contained'
											color='primary'
										>
											Submit
										</Button>
									</Box>
									{error && errorMsg.return && (
										<Alert severity='error'>{errorMsg.return}</Alert>
									)}
								</form>
							)}
						</Box>
					) : (
						<Box p={3} bgcolor='lightgrey' borderRadius={3}>
							<Typography align='center' variant='h4'>
								Thank you, your message has been sent!🎉
							</Typography>
						</Box>
					)}
				</Grid>
			</Grid>
		</Box>
	);
};

export default Contact;
