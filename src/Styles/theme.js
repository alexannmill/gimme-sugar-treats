import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
	palette: {
		primary: {
			main: '#6B705C',
			dark: '#494e3c',
			// dark: '#5b6347',
		},
		secondary: {
			main: '#582F0E',
		},
		background: {
			default: '#ddbea9',
			paper: '#6B705C',
		},
	},
	typography: {
		fontFamily: `'Playfair Display', serif`,
		// fontFamily: `'Open Sans', serif`,

		h1: {
			fontSize: '3rem',
			fontWeight: 'bold',
			marginBottom: '1rem',
		},
		h2: {
			fontSize: '1.5rem',
			fontWeight: 'bold',
			marginBottom: '1rem',
		},
	},
	components: {
		MuiInputBase: {
			styleOverrides: {
				root: {
					backgroundColor: '#899171',
				},
			},
		},
	},
});
export default theme;
