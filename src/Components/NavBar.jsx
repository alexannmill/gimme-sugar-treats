import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Menu,
	MenuItem,
	IconButton,
	Box,
} from '@mui/material';
import { Facebook, Instagram, List } from '@mui/icons-material';

const NavBar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const isMenuOpen = Boolean(anchorEl);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const renderMenu = (
		<Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
			<MenuItem component={Link} to='/'>
				HOME
			</MenuItem>
			<MenuItem component={Link} to='/about'>
				ABOUT
			</MenuItem>
			<MenuItem component={Link} to='/contact'>
				CONTACT
			</MenuItem>
			<MenuItem component={Link} to='/menu'>
				MENU
			</MenuItem>
			<MenuItem
				component={Link}
				to='https://www.instagram.com/gimmesugartreats'
			>
				<Instagram />
			</MenuItem>
			<MenuItem
				component={Link}
				to='https://www.facebook.com/groups/gimmesugarhomebakery'
			>
				<Facebook />
			</MenuItem>
		</Menu>
	);

	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					GIMMIE SUGAR TREATS
				</Typography>
				<IconButton
					size='large'
					edge='end'
					color='inherit'
					aria-label='menu'
					aria-haspopup='true'
					onClick={handleMenuOpen}
					sx={{ display: { xs: 'block', md: 'none' } }}
				>
					<List />
				</IconButton>
				{renderMenu}
				<Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
					<Button
						color='inherit'
						component={Link}
						to='https://www.instagram.com/gimmesugartreats'
					>
						<Instagram />
					</Button>
					<Button
						color='inherit'
						component={Link}
						to='https://www.facebook.com/groups/gimmesugarhomebakery'
					>
						<Facebook />
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
