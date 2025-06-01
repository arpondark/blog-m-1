"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const links = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},
	{
		id: 2,
		title: "Portfolio",
		url: "/portfolio",
	},
	{
		id: 3,
		title: "Blog",
		url: "/blog",
	},
	{
		id: 4,
		title: "About",
		url: "/about",
	},
	{
		id: 5,
		title: "Contact",
		url: "/contract",
	},
];

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [theme, setTheme] = useState('light');
	const { user, isAuthenticated, logout } = useAuth();

	// Create dynamic links based on authentication status
	const navigationLinks = isAuthenticated 
		? [...links.slice(0, 2), { id: 6, title: "Dashboard", url: "/dashboard" }, ...links.slice(2)]
		: links;

	// Initialize theme from localStorage or system preference
	useEffect(() => {
		// Check if user has previously set a theme preference
		const storedTheme = localStorage.getItem('theme');
		
		if (storedTheme) {
			setTheme(storedTheme);
			document.documentElement.classList.toggle('dark', storedTheme === 'dark');
		} else {
			// Check system preference
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			setTheme(prefersDark ? 'dark' : 'light');
			document.documentElement.classList.toggle('dark', prefersDark);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.classList.toggle('dark', newTheme === 'dark');
		localStorage.setItem('theme', newTheme);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const handleLogout = () => {
		logout();
		setMobileMenuOpen(false);
	};

	return (
		<header className="relative bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
			<div className="container h-[100px] flex justify-between items-center mx-auto px-6 md:px-12">
				<Link href="/" className="logo font-bold text-[22px] text-gray-900 dark:text-white">
					Arpon
				</Link>

				<div className="links hidden md:flex items-center gap-[20px]">
					{navigationLinks.map(link => (
						<Link
							key={link.id}
							href={link.url}
							className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
						>
							{link.title}
						</Link>
					))}
					
					{/* Theme Toggle Button */}
					<button 
						onClick={toggleTheme}
						className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300"
						aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
					>
						{theme === 'light' ? (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
							</svg>
						)}
					</button>
					
					{/* Authentication Section */}
					<div className="flex items-center gap-2">
						{isAuthenticated ? (
							<>
								<span className="text-gray-700 dark:text-gray-300 text-sm">
									Welcome, {user?.username}
								</span>
								<button 
									onClick={handleLogout}
									className="py-[5px] px-4 border border-red-500 text-red-500 cursor-pointer rounded-[3px] hover:bg-red-500 hover:text-white transition-colors duration-200"
								>
									Logout
								</button>
							</>
						) : (
							<>
								<Link href="/auth/login" className="py-[5px] px-4 border border-[#53c28b] text-[#53c28b] cursor-pointer rounded-[3px] hover:bg-[#53c28b] hover:text-white transition-colors duration-200">
									Sign In
								</Link>
								<Link href="/auth/register" className="py-[5px] px-4 border-none bg-[#53c28b] text-white cursor-pointer rounded-[3px] hover:bg-[#45a475] transition-colors duration-200">
									Sign Up
								</Link>
							</>
						)}
					</div>
				</div>

				{/* Mobile menu button and theme toggle */}
				<div className="md:hidden flex items-center gap-2">
					{/* Theme Toggle Button for Mobile */}
					<button 
						onClick={toggleTheme}
						className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300"
						aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
					>
						{theme === 'light' ? (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
							</svg>
						)}
					</button>
					
					{/* Mobile Menu Button */}
					<button
						className="mobile-menu-button p-1 focus:outline-none text-gray-700 dark:text-gray-300"
						onClick={toggleMobileMenu}
						aria-label="Toggle menu"
					>
						<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile menu, show/hide based on menu state */}
			{mobileMenuOpen && (
				<div className="md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg z-10 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
					<div className="px-4 py-3 space-y-3">
						{navigationLinks.map(link => (
							<Link
								key={link.id}
								href={link.url}
								className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
								onClick={() => setMobileMenuOpen(false)}
							>
								{link.title}
							</Link>
						))}
						
						{/* Authentication Section for Mobile */}
						<div className="pt-3 border-t border-gray-200 dark:border-gray-700 space-y-2">
							{isAuthenticated ? (
								<>
									<div className="text-gray-700 dark:text-gray-300 text-sm py-2">
										Welcome, {user?.username}
									</div>
									<button 
										onClick={handleLogout}
										className="block w-full text-left py-[5px] px-4 border border-red-500 text-red-500 cursor-pointer rounded-[3px] hover:bg-red-500 hover:text-white transition-colors duration-200"
									>
										Logout
									</button>
								</>
							) : (
								<>
									<Link href="/auth/login" className="block w-full text-left py-[5px] px-4 border border-[#53c28b] text-[#53c28b] cursor-pointer rounded-[3px] hover:bg-[#53c28b] hover:text-white transition-colors duration-200">
										Sign In
									</Link>
									<Link href="/auth/register" className="block w-full text-left py-[5px] px-4 border-none bg-[#53c28b] text-white cursor-pointer rounded-[3px] hover:bg-[#45a475] transition-colors duration-200">
										Sign Up
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
