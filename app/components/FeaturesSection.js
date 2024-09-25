// app/components/FeaturesSection.js
import { PiCertificateBold } from 'react-icons/pi';
import { FaMoneyBill1Wave } from 'react-icons/fa6';

const FeaturesSection = () => {
	return (
		<div className="container max-w-6xl mx-auto px-4 pb-10">
			<h2 className="text-3xl md:text-4xl font-bold text-center text-[#ED0D0D] mb-12">
				Why Choose Us
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Certification */}
				<div className="text-center flex flex-col justify-center items-center p-8 border rounded-lg shadow-lg">
					<div className="mb-4">
						<PiCertificateBold className="text-[#ED0D0D] text-4xl" />
					</div>
					<h3 className="text-xl mx-auto font-semibold mb-2">
						Certification
					</h3>
					<p className="text-gray-600">
						Our handymen are certified and highly
						experienced professionals.
					</p>
				</div>

				{/* 24/7 Availability */}
				<div className="text-center p-8 border rounded-lg shadow-lg">
					<div className="mb-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-12 h-12 mx-auto text-[#ED0D0D]"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 6v6h4m5.707 6.707L19 19m0-5h.01M6.343 6.343a9 9 0 0112.728 12.728M5 12H5.01"
							/>
						</svg>
					</div>
					<h3 className="text-xl font-semibold mb-2">
						24/7 Availability
					</h3>
					<p className="text-gray-600">
						Having a hard time with your toilet in the
						middle of the night? Call us!
					</p>
				</div>

				{/* Fair Prices */}
				<div className="text-center flex flex-col items-center justify-center p-8 border rounded-lg shadow-lg">
					<div className="mb-4">
						<FaMoneyBill1Wave className="text-[#ED0D0D] text-4xl" />
					</div>
					<h3 className="text-xl font-semibold mb-2">
						Fair Prices
					</h3>
					<p className="text-gray-600">
						We aren’t the cheapest, but we won’t ruin your
						wallet either. We promise!
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeaturesSection;
