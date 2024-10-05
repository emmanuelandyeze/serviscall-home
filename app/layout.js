import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: 'Serviscall',
	description: 'A construction company website in Nigeria.',
	icons: {
		icon: '/favicon.ico', // Path to your favicon
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}