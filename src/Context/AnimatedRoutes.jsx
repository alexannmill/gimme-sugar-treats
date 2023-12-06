import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import Home from '../Components/Home';
import Contact from '../Components/Contact';
import Menu from '../Components/Menu';
import Gallery from '../Components/Gallery';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={location.pathname}
				initial={{ translateY: '100%' }}
				animate={{
					translateY: '0%',
					transition: { ease: 'easeInOut', duration: 0.5 },
				}}
				exit={{
					translateY: '-200%',
					transition: { ease: 'easeInOut', duration: 0.75 },
				}}
			>
				<Routes location={location}>
					<Route path='/gimme-sugar-treats' element={<Home />} />
					<Route path='/gimme-sugar-treats/gallery' element={<Gallery />} />
					<Route path='/gimme-sugar-treats/contact' element={<Contact />} />
					<Route path='/gimme-sugar-treats/menu' element={<Menu />} />
				</Routes>
			</motion.div>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
