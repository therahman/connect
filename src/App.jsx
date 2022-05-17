import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Hero from './pages/Landing/Hero';

function App() {
	return (
		<>
			<Header />
			<div className=''>
				<Hero />
			</div>
			<Footer />
		</>
	);
}

export default App;
