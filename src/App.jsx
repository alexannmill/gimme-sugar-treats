import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import NavBar from './Components/NavBar';

const App = () => {
	return (
		<Router>
			<NavBar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/menu' element={<Menu />} />
			</Routes>
		</Router>
	);
};

export default App;
