import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import NavBar from './Components/NavBar';
import theme from './Styles/theme';
import { ThemeProvider } from '@mui/material';
import Gallery from './Components/Gallery';

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<main
					style={{
						backgroundColor: '#e5d2c0',
						minHeight: '100vh',
						// padding: '5%',
					}}
				>
					<NavBar />

					<Routes>
						<Route path='/gimme-sugar-treats' element={<Home />} />
						<Route path='/gallery' element={<Gallery />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/menu' element={<Menu />} />
					</Routes>
				</main>
			</ThemeProvider>
		</Router>
	);
};

export default App;
