import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					Bakery Website
				</Typography>
				<Button color='inherit' component={Link} to='/'>
					Home
				</Button>
				<Button color='inherit' component={Link} to='/about'>
					About
				</Button>
				<Button color='inherit' component={Link} to='/contact'>
					Contact
				</Button>
				<Button color='inherit' component={Link} to='/menu'>
					Menu
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
