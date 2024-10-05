// app/about/page.tsx

import Image from 'next/image';

export default function AboutUsPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			{/* Hero Image */}
			<section className="mb-12">
				<div className="relative w-full h-64 md:h-96">
					<Image
						src="/images/project15.jpg" // Replace with actual image path
						alt="Serviscall"
						fill
						className="object-cover rounded-lg"
					/>
				</div>
			</section>

			{/* About Us Content */}
			<section className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold text-center mb-8">
					About Serviscall
				</h1>

				<p className="text-lg mb-6">
					At <strong>Serviscall</strong>, we pride ourselves
					on delivering a wide range of specialty services
					tailored to meet the needs of homeowners,
					businesses, and industries alike. With several
					years of experience in the field, our commitment
					to high-quality work and customer satisfaction is
					unmatched. We bring together expertise from
					various trades to provide comprehensive solutions
					for all your maintenance and improvement needs.
				</p>

				<p className="text-lg mb-6">
					Our team is made up of dedicated professionals who
					specialize in home maintenance, electrical
					services, carpentry, metal works, cleaning,
					painting, flooring, ICT services, and project
					management. We believe in the importance of doing
					things right the first time, which is why we
					approach every project with a focus on precision,
					safety, and lasting quality.
				</p>

				<p className="text-lg mb-6">
					We offer a full range of{' '}
					<strong>electrical services</strong>, from
					installations to repairs, ensuring your home or
					office is safe and energy-efficient. Our{' '}
					<strong>carpentry</strong> team designs and builds
					custom woodwork, bringing your vision to life with
					quality craftsmanship. For those looking for more
					specialized work, our <strong>metal works</strong>{' '}
					division can handle anything from structural
					repairs to ornamental designs.
				</p>

				<p className="text-lg mb-6">
					In addition to our skilled trades, we provide
					expert <strong>cleaning services</strong>,
					ensuring that every project ends with a spotless
					finish. Whether it’s routine cleaning or
					post-construction clean-up, we’ve got you covered.
					Our <strong>painting and flooring</strong> experts
					work with the latest materials and techniques to
					transform spaces, adding value and beauty to every
					property we touch.
				</p>

				<p className="text-lg mb-6">
					In today’s digital world, our{' '}
					<strong>ICT services</strong> keep homes and
					businesses connected and secure. From network
					setup to troubleshooting, we provide cutting-edge
					solutions to ensure smooth operations. Lastly, our{' '}
					<strong>project management</strong> services tie
					everything together, offering you a seamless,
					stress-free experience from start to finish. We
					coordinate everything, ensuring projects are
					completed on time, within budget, and to your
					specifications.
				</p>

				<p className="text-lg mb-6">
					Over the years, <strong>Serviscall</strong> has
					earned a reputation for reliability, quality, and
					professionalism. Whether it's a small repair or a
					large-scale renovation, we approach every task
					with the same dedication and attention to detail.
					Our goal is not just to meet your expectations but
					to exceed them in every way possible.
				</p>

				<p className="text-lg mb-6">
					When you choose <strong>Serviscall</strong>,
					you're not just hiring a service provider – you're
					partnering with a team that cares about the
					success of your project as much as you do. We
					understand the value of trust and strive to build
					lasting relationships with all our clients. Your
					satisfaction is our success.
				</p>

				<p className="text-lg mb-6">
					Ready to bring your project to life? Contact us
					today and let us take care of all your
					maintenance, repair, and improvement needs with
					the professionalism and expertise you deserve.
				</p>
			</section>
		</div>
	);
}
