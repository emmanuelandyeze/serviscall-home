// app/services/page.tsx

import Image from 'next/image';

const galleryImages = Array.from(
	{ length: 18 },
	(_, i) => `/images/project${i + 1}.jpg`,
);

export default function ServicesPage() {
	return (
		<div className="container max-w-6xl mx-auto px-4 pt-24 pb-12">
			{/* Company Information Section */}
			<section className="mb-12">
				<h1 className="text-4xl font-bold text-center mb-6">
					Our Services
				</h1>
				<p className="text-lg text-center max-w-2xl mx-auto mb-6">
					Serviscall has been providing exceptional
					specialty services for several years. We cover a
					wide area of home maintenance and improvement,
					including electrical services, carpentry, metal
					works, cleaning, painting, flooring, ICT services,
					and project management. Our team of professionals
					is committed to delivering high-quality
					craftsmanship and reliable service for every
					project.
				</p>
			</section>

			{/* Masonry Gallery Section */}
			<section>
				<h2 className="text-3xl font-bold text-center mb-8">
					Our Past Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 masonry-grid">
					{galleryImages.map((src, index) => (
						<div key={index} className="break-inside">
							<Image
								src={src}
								alt={`Project ${index + 1}`}
								width={400}
								height={300}
								className="w-full h-auto object-cover rounded-lg"
							/>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
