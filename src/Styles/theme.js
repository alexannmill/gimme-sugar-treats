import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
	palette: {
		primary: {
			main: '#6B705C',
			dark: '#5b6347',
		},
		secondary: {
			main: '#BF4238',
		},
		background: {
			default: '#ddbea9',
			// textbox: '#cb997ea1',
			paper: '#a0a494',
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
