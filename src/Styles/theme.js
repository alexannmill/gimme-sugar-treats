import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
	palette: {
		primary: {
			// main: '#A5A58D',
			main: '#6B705C',
		},
		secondary: {
			main: '#BF4238',
		},
		background: {
			default: '#ddbea9',
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
	},
});

export default theme;
