// app/components/TestimonialsSection.js

const TestimonialsSection = () => {
	return (
		<div
			className="relative bg-cover bg-center py-16"
			style={{
				backgroundImage: "url('/images/17.jpg')",
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-[#ED0D0D] opacity-75"></div>

			<div className="relative container max-w-6xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
					Testimonials from our happy clients
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{/* Testimonial 1 */}
					<div className="bg-transparent border border-white p-8 text-white rounded-none shadow-lg relative z-10">
						<p className="text-white">
							"Serviscall did an amazing job! The handymen
							were professional, quick, and the price was
							fair. Highly recommend their service!"
						</p>
						<div className="flex items-center mt-4">
							<div>
								<h4 className="font-semibold text-lg">
									John Doe
								</h4>
								<p className="text-gray-100 text-sm">
									Business Owner
								</p>
							</div>
						</div>
					</div>

					{/* Testimonial 2 */}
					<div className="bg-transparent border border-white p-8 rounded-none text-white shadow-lg relative z-10">
						<p className="text-white">
							"I had an emergency plumbing issue late at
							night, and Serviscall came through! Their 24/7
							availability is a lifesaver."
						</p>
						<div className="flex items-center mt-4">
							<div>
								<h4 className="font-semibold text-lg">
									Jane Smith
								</h4>
								<p className="text-gray-50 text-sm">
									Homeowner
								</p>
							</div>
						</div>
					</div>

					{/* Testimonial 3 */}
					<div className="bg-transparent border border-white p-8 rounded-none text-white shadow-lg relative z-10">
						<p className="text-white">
							"The electricians from Serviscall were
							top-notch! They handled my restaurant's wiring
							with precision and care."
						</p>
						<div className="flex items-center mt-4">
							<div>
								<h4 className="font-semibold text-lg">
									Alex Johnson
								</h4>
								<p className="text-gray-50 text-sm">
									Restaurant Owner
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsSection;
