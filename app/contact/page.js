// app/contact/page.tsx
'use client';
import { useState } from 'react';

export default function ContactUsPage() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = () => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		e.preventDefault();
		// Handle form submission logic (e.g., send to an API)
		console.log('Form submitted:', form);
	};

	return (
		<div className="container mx-auto px-4 pt-40 pb-12">
			<h1 className="text-4xl font-bold text-center mb-8">
				Contact Us
			</h1>

			{/* Contact Info Section */}
			<section className="text-center mb-12">
				<p className="text-lg">
					Have any questions or need assistance? We're here
					to help! Contact us via phone, email, or fill out
					the form below.
				</p>
				<div className="mt-6">
					<p className="text-lg font-semibold">
						Phone: +234 813 154 9975
					</p>
					<p className="text-lg font-semibold">
						Email: myserviscall@gmail.com
					</p>
					<p className="text-lg font-semibold">
						Address: 183, Bamgbose St., Lagos Island,
						102273, Lagos Nigeria
					</p>
				</div>
			</section>

			{/* Contact Form Section */}
			{/* <section className="max-w-3xl mx-auto">
				<form
					onSubmit={handleSubmit}
					className="grid grid-cols-1 gap-6"
				>
					<div>
						<label
							htmlFor="name"
							className="block text-lg font-medium mb-2"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={form.name}
							onChange={handleChange}
							required
							className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block text-lg font-medium mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
							className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
						/>
					</div>

					<div>
						<label
							htmlFor="subject"
							className="block text-lg font-medium mb-2"
						>
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={form.subject}
							onChange={handleChange}
							required
							className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
						/>
					</div>

					<div>
						<label
							htmlFor="message"
							className="block text-lg font-medium mb-2"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={form.message}
							onChange={handleChange}
							required
							rows={5}
							className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
						/>
					</div>

					<div>
						<button
							type="submit"
							className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
						>
							Send Message
						</button>
					</div>
				</form>
			</section> */}
		</div>
	);
}
