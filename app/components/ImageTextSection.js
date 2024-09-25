'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const ImageTextSection = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const section = document.getElementById(
				'imageTextSection',
			);
			const rect = section.getBoundingClientRect();
			const windowHeight =
				window.innerHeight ||
				document.documentElement.clientHeight;

			if (rect.top <= windowHeight * 0.75) {
				setIsVisible(true);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () =>
			window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			id="imageTextSection"
			className="container max-w-5xl mx-auto px-4 py-16"
		>
			<div className="flex flex-col pb-10 md:flex-row items-center">
				{/* Left: Image */}
				<div
					className={`w-full md:w-1/2 mb-8 md:mb-0 transform transition-opacity duration-1000 ease-out ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					<img
						src="/images/21.jpg"
						alt="Descriptive Alt Text"
						className="rounded-lg shadow-lg w-full h-auto object-cover"
					/>
				</div>

				{/* Right: Text and Button */}
				<div
					className={`w-full md:w-1/2 md:pl-12 transform transition-opacity duration-1000 ease-out delay-200 ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-[#0f0f0f] mb-4">
						<span className="text-[#ED0D0D] font-bold ">
							15+
						</span>{' '}
						years creating{' '}
						<span className="text-[#ED0D0D] underline underline-offset-2">
							unique
						</span>{' '}
						experiences.
					</h2>
					<p className="text-lg md:text-xl mb-6 text-gray-600">
						Serviscall has several years of experience with
						providing a wide area of specialty services in;
						Home maintenance, electrical services,
						carpentry, metal works, cleaning, painting,
						flooring, ICT services, and project management.
					</p>

					{/* Button */}
					<Link
						href={'https://wa.me/2348131549975'}
						target="_blank"
						className="px-8 py-3 border-2 border-[#ED0D0D] text-[#ED0D0D] font-semibold rounded-lg hover:bg-[#ED0D0D] hover:text-white transition duration-300"
					>
						Talk to us
					</Link>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default ImageTextSection;
