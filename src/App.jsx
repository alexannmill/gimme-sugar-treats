import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import NavBar from './Components/NavBar';
import theme from './Styles/theme';
import { ThemeProvider } from '@mui/material';
const App = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<NavBar />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/menu' element={<Menu />} />
				</Routes>
			</ThemeProvider>
		</Router>
	);
};

export default App;
