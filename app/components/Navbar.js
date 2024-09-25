// app/components/Navbar.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false); // State to track if the mobile menu is open
	const pathname = usePathname(); // Get the current pathname

	// Helper function to check if a link is active
	const isActive = (path) => pathname === path;

	// Toggle mobile menu
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className="bg-white fixed w-full shadow-sm top-0 left-0 z-50">
			<div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
				{/* Logo */}
				<div className="">
					<Link href="/">
						<img
							src="/images/logo.png"
							className="h-12"
							alt="Serviscall logo"
						/>
					</Link>
				</div>

				{/* Navigation Links (Desktop) */}
				<div className="hidden md:flex items-center space-x-8 text-md">
					<Link
						href="/"
						className={
							isActive('/')
								? 'text-[#ED0D0D] font-bold'
								: 'hover:text-[#ED0D0D]'
						}
					>
						Home
					</Link>
					<Link
						href="#"
						className={
							isActive('/services')
								? 'text-[#ED0D0D] font-bold'
								: 'hover:text-[#ED0D0D]'
						}
					>
						Services
					</Link>
					<Link
						href="#"
						className={
							isActive('/about-us')
								? 'text-[#ED0D0D] font-bold'
								: 'hover:text-[#ED0D0D]'
						}
					>
						About Us
					</Link>
					<Link
						href="https://serviscall.com"
						target="_blank"
						className={
							isActive('/faqs')
								? 'text-[#ED0D0D] font-bold'
								: 'hover:text-[#ED0D0D]'
						}
					>
						Shop
					</Link>
					<Link
						href="#"
						className={
							isActive('/contact-us')
								? 'text-[#ED0D0D] font-bold'
								: 'hover:text-[#ED0D0D]'
						}
					>
						Contact Us
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden mt-1">
					<button
						onClick={toggleMenu}
						className="text-[#ED0D0D]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
					menuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className="p-4 flex justify-end">
					<button
						onClick={toggleMenu}
						className="text-[#ED0D0D]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<div className="flex flex-col items-center space-y-6 text-md p-8">
					<Link
						href="/"
						onClick={toggleMenu}
						className={
							isActive('/')
								? 'text-[#ED0D0D] font-bold'
								: 'hover:text-[#ED0D0D]'
						}
					>
						Home
					</Link>
					<Link
						href="#"
						onClick={toggleMenu}
						className={
							isActive('/services')
								? 'text-[#ED0D0D] font-bold'
								: 'hover:text-[#ED0D0D]'
						}
					>
						Services
					</Link>
					<Link
						href="#"
						onClick={toggleMenu}
						className={
							isActive('/about-us')
								? 'text-[#ED0D0D] font-bold'
								: 'hover:text-[#ED0D0D]'
						}
					>
						About Us
					</Link>
					<Link
						href="https://store.serviscall.com"
						target="_blank"
						onClick={toggleMenu}
						className={
							isActive('/faqs')
								? 'text-[#ED0D0D] font-bold'
								: 'hover:text-[#ED0D0D]'
						}
					>
						Shop
					</Link>
					<Link
						href="#"
						onClick={toggleMenu}
						className={
							isActive('/contact-us')
								? 'text-[#ED0D0D] font-bold'
								: 'hover:text-[#ED0D0D]'
						}
					>
						Contact Us
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
