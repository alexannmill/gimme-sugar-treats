import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<Container maxWidth='sm'>
			<Typography variant='h4' gutterBottom>
				Contact Us
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
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
		</Container>
	);
};

export default Contact;
