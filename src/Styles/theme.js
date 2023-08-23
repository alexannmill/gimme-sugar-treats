import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
	palette: {
		primary: {
			main: '#7c4d74', // Customize your primary color
		},
		secondary: {
			main: '#4c7846', // Customize your secondary color
		},
		background: {
			default: '#fde1ef',
			paper: '#fde1ef',
		},
	},
	typography: {
		fontFamily: `'Playfair Display', serif`,
		h1: {
			fontSize: '2rem',
			fontWeight: 'bold',
			marginBottom: '1rem',
		},
		h2: {
			fontSize: '1.5rem',
			fontWeight: 'bold',
			marginBottom: '1rem',
		},
		// Add more typography styles as needed
	},
});

export default theme;
