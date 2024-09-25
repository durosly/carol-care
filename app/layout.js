import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const daikon = localFont({
	src: "./fonts/Pepper-Type-Daikon-ExtraLight.woff2",
	variable: "--font-daikon",
	display: "swap",
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${daikon.variable}  antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
