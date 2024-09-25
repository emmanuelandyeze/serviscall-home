import Image from "next/image";
import Hero from './components/Hero';
import ImageTextSection from './components/ImageTextSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
	return (
		<main>
			<Hero />
			<ImageTextSection />
			<FeaturesSection />
			<TestimonialsSection />
		</main>
	);
}
