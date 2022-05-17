import React from 'react';
import './header.scss';
import logo from '../../../assets/images/SVG/white-logo.svg';
const Header = () => {
	return (
		<>
			<header className='text-gray-400 header body-font fixed w-full'>
				<div className='container mx-auto flex flex-wrap flex-col md:flex-row items-center'>
					<div className='flex items-center gap-2 ml-5'>
						<button className='btn'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
								<path fill='none' d='M0 0h24v24H0z' />
								<path d='M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z' />
							</svg>
						</button>
						<a className='title-font font-medium items-center text-white mb-4 md:mb-0'>
							<img src={logo} alt='white-logo' />
						</a>
					</div>
					<nav className='md:ml-auto flex flex-wrap gap-6 bg-gray-900 items-center text-base justify-center px-6'>
						<a className=' hover:text-white flex flex-wrap gap-1 items-center'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
								<path fill='none' d='M0 0h24v24H0z' />
								<path d='M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z' />
							</svg>
							WALLET
						</a>
						<a className=' hover:text-white flex flex-wrap gap-1 items-center'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
								<path fill='none' d='M0 0h24v24H0z' />
								<path d='M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z' />
							</svg>
							DAAP
						</a>
						<a className=' hover:text-white flex flex-wrap gap-1 items-center'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
								<path fill='none' d='M0 0h24v24H0z' />
								<path d='M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z' />
							</svg>
							BUY NOW
						</a>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
