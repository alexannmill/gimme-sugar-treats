import React, { useState } from 'react';
import {
	Container,
	Typography,
	TextField,
	Button,
	Box,
	FormControl,
} from '@mui/material';
import theme from '../Styles/theme';

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
		<Container maxWidth='sm'>
			<br />
			<Typography variant='h4' gutterBottom>
				Contact Us
			</Typography>
			{!submitted ? (
				<>
					<Typography>
						Have a question or want to place an order?
						<br />
						Please fill out the form below!
					</Typography>
					<br />
					<Typography variant='p' gutterBottom>
						* $20 delivery, MINIMUM 3 days for an order
					</Typography>
					<form onSubmit={sendEmail} method='POST'>
						<TextField
							variant='outlined'
							label='Name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							fullWidth
							margin='normal'
							required
						/>
						<TextField
							label='Email'
							name='email'
							type='email'
							inputProps={{ type: 'email' }}
							value={formData.email}
							onChange={handleChange}
							fullWidth
							margin='normal'
							required
						/>
						<TextField
							label='Message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							fullWidth
							margin='normal'
							multiline
							rows={4}
							required
						/>
						<Button type='submit' variant='contained' color='primary'>
							Submit
						</Button>
					</form>
				</>
			) : (
				<></>
			)}
		</Container>
	);
};

export default Contact;
