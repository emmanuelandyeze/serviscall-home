// app/components/Footer.js

import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container max-w-6xl mx-auto px-4">
				{/* Top Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Company Info */}
					<div>
						<img
							src="/images/logo.png"
							className="h-12"
							alt="Serviscall logo"
						/>
						<p className="text-gray-400">
							We bring your ideas to life with certified and
							experienced handymen providing 24/7 services
							at fair prices.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">
							Quick Links
						</h4>
						<ul className="space-y-2">
							<li>
								<Link href="/" className="hover:underline">
									Home
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Services
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									About Us
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Information */}
					<div>
						<h4 className="text-lg font-semibold mb-4">
							Contact Us
						</h4>
						<ul className="space-y-2">
							<li className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-5 h-5 mr-2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M16 2H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2z"
									/>
								</svg>
								+234 813 154 9975
							</li>
							<li className="flex items-center">
								<MdOutlineEmail className="mr-2" />
								myserviscall@gmail.com
							</li>
							<li className="flex items-center">
								<IoLocationOutline className="mr-2 h-6" />
								183, Bamgbose St., Lagos Island, 102273,
								Lagos Nigeria
							</li>
						</ul>
					</div>
				</div>

				{/* Social Media Icons */}
				<div className="flex justify-center space-x-6 mb-8">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
							className="w-6 h-6 hover:text-[#ED0D0D]"
						>
							<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.878v-6.987h-2.54v-2.72h2.54V9.845c0-2.5 1.492-3.876 3.779-3.876 1.096 0 2.238.194 2.238.194v2.47h-1.261c-1.242 0-1.63.771-1.63 1.562v1.862h2.773l-.443 2.72h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
						</svg>
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
							className="w-6 h-6 hover:text-[#ED0D0D]"
						>
							<path d="M19.633 7.997a7.69 7.69 0 01-2.196.603 3.834 3.834 0 001.682-2.114 7.717 7.717 0 01-2.441.931A3.859 3.859 0 0016.044 6a3.857 3.857 0 00-3.857 3.857c0 .302.034.597.1.88a10.963 10.963 0 01-7.944-4.03 3.858 3.858 0 001.193 5.143 3.833 3.833 0 01-1.748-.484v.048a3.86 3.86 0 003.097 3.784 3.86 3.86 0 01-1.744.066 3.86 3.86 0 003.6 2.672 7.736 7.736 0 01-4.786 1.65c-.309 0-.614-.018-.916-.053A10.96 10.96 0 005.67 19.556c7.109 0 10.996-5.89 10.996-10.997 0-.168-.004-.336-.011-.503a7.835 7.835 0 001.978-1.997z" />
						</svg>
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiFillLinkedin className="h-6 text-lg" />
					</a>
				</div>

				{/* Bottom Section */}
				<div className="flex justify-between items-center border-t border-gray-700 pt-6 text-gray-400">
					<p>
						&copy; {new Date().getFullYear()} Serviscall.
						All Rights Reserved.
					</p>
					<div className="flex space-x-4">
						<Link
							href="/privacy-policy"
							className="hover:text-white"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms-of-service"
							className="hover:text-white"
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
