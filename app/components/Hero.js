// app/components/Hero.js
import { IoHomeOutline } from 'react-icons/io5';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { GiWoodBeam } from 'react-icons/gi';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { GiPaintRoller } from 'react-icons/gi';
import { GiMetalBar } from 'react-icons/gi';
import { GiFloorPolisher } from 'react-icons/gi';
import { TbTools } from 'react-icons/tb';

const services = [
	{
		title: 'Home Maintenance',
		image: '/images/22.jpg',
		icon: (
			<IoHomeOutline className="text-5xl mb-3 text-yellow-400" />
		),
	},
	{
		title: 'Electrical Services',
		image: '/images/electricity.png',
		icon: (
			<HiOutlineLightningBolt className="text-5xl mb-3 text-yellow-400" />
		),
	},
	{
		title: 'Carpentry',
		image: '/images/12.jpg',
		icon: (
			<GiWoodBeam className="text-5xl mb-3 text-yellow-400" />
		),
	},
	{
		title: 'Cleaning',
		image: '/images/cleaning.jpg',
		icon: (
			<MdOutlineCleaningServices className="text-5xl mb-3 text-yellow-400" />
		),
	},
	{
		title: 'Painting',
		image: '/images/11.jpg',
		icon: (
			<GiPaintRoller className="text-5xl mb-3 text-yellow-400" />
		),
	},
	{
		title: 'Metal Works',
		image: '/images/2.jpg',
		icon: (
			<GiMetalBar className="text-5xl mb-3 text-yellow-400" />
		),
	},
	{
		title: 'Flooring',
		image: '/images/21.jpg',
		icon: (
			<GiFloorPolisher className="text-5xl mb-3 text-yellow-400" />
		),
	},
	{
		title: 'Project Management',
		image: '/images/17.jpg',
		icon: (
			<TbTools className="text-5xl mb-3 text-yellow-400" />
		),
	},
];

const Hero = () => {
	return (
		<div
			className="relative pt-40 bg-cover bg-center"
			style={{
				backgroundImage: "url('/images/17.jpg')",
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-[#C7234E] opacity-90"></div>

			{/* Centered Text */}
			<div className="relative flex flex-col justify-center items-center h-full text-white text-center">
				<div>
					<h1 className="text-4xl md:text-6xl font-bold">
						Bring your{' '}
						<span className="underline underline-offset-4">
							ideas
						</span>{' '}
						to life with us!
					</h1>
					<p className="mt-4 text-xl md:text-2xl">
						We offer a variety of services to meet your
						needs.
					</p>
				</div>
				{/* Services Grid */}
				<div className="relative mt-8 lg:mt-16">
					<div className="container max-w-6xl mx-auto px-4 py-8">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
							{services.map((service, index) => (
								<div
									key={index}
									className="relative bg-cover w-80 md:w-64 bg-center h-[14rem] rounded-none shadow-lg"
									style={{
										backgroundImage: `url(${service.image})`,
									}}
								>
									{/* Overlay */}
									<div className="absolute inset-0 bg-black bg-opacity-[0.65] rounded-none"></div>

									{/* Service Content */}
									<div className="relative z-10 flex flex-col justify-center items-center h-full">
										{/* <img
											src={service.icon}
											alt={`${service.title} icon`}
											className="w-12 h-12 mb-4"
										/> */}
										{service.icon}
										<h2 className="text-white text-2xl font-semibold">
											{service.title}
										</h2>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
