import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar';
import theme from './Styles/theme';
import { ThemeProvider } from '@mui/material';
import AnimatedRoutes from './Context/AnimatedRoutes';

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<main
					style={{
						backgroundColor: '#e5d2c0',
						minHeight: '100vh',
					}}
				>
					<NavBar />
					<AnimatedRoutes />
				</main>
			</ThemeProvider>
		</Router>
	);
};

export default App;
