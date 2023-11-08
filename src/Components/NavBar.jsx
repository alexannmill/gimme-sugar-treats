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
import Logo from '../Images/reg-logo.png';

//Due to MUI version makeStyle/useStyles with theme arg cannot be used. Need to import the theme for OO styling.
import theme from '../Styles/theme';
const classes = {
	appBar: {
		borderBottomLeftRadius: theme.spacing(1),
		borderBottomRightRadius: theme.spacing(1),
		height: 'clamp(5rem, 8vh)',
	},
	logo: { height: '2.5rem', borderRadius: '50%', marginRight: '1rem' },
};

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
			<MenuItem component={Link} to='/gimme-sugar-treats'>
				HOME
			</MenuItem>
			<MenuItem component={Link} to='/gallery'>
				GALLERY
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
		<AppBar position='static' sx={classes.appBar}>
			<Toolbar>
				<img src={Logo} alt='logo' style={classes.logo} />
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					GIMME SUGAR TREATS
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
					<Button color='inherit' component={Link} to='/gimme-sugar-treats'>
						Home
					</Button>
					<Button color='inherit' component={Link} to='/gallery'>
						Gallery
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
