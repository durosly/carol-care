import Image from "next/image";
import logoDark from "@/logos/logo-dark.png";
import Link from "next/link";

function Footer() {
	return (
		<footer className="container mx-auto font-sans">
			<div className="flex flex-wrap-reverse lg:flex-nowrap items-center justify-center lg:justify-between ">
				<div className="flex justify-center items-center w-full lg:w-1/4">
					<div className="w-32 md:w-52 h-32 md:h-52 relative">
						<Image alt="Carol Cares Dark Logo" sizes="(min-width: 780px) 208px, 128px" className="object-contain" src={logoDark} fill />
					</div>
				</div>
				<div className="flex justify-center h-64 w-full lg:w-1/4">
					<ul className="w-full max-lg:text-center">
						<li className="font-sans text-2xl font-bold tracking-wide pb-6">LINKS</li>
						<li className="pb-1">
							<Link href="/menu">Menu</Link>
						</li>
						<li className="pb-1">
							<Link href="/about-us">About Us</Link>
						</li>
						<li className="pb-1">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="flex justify-center h-64 w-full lg:w-1/4">
					<ul className=" w-full max-lg:text-center">
						<li className="font-sans text-2xl font-bold tracking-wide pb-4">FIND US</li>
						<li className="font-sans font-bold text-lg py-2">Address :</li>
						<li>9 Clutterbuck Lane, Ajax Ontario, Canada</li>
						<li className="font-sans  font-bold text-lg py-2">Phone / Email :</li>
						<li>
							<a href="tel:+16475512566">+16475512566</a>
						</li>
						<li>
							<a href="mailto:info@carolcares.com">info@carolcares.com</a>
						</li>
					</ul>
				</div>
				<div className="flex justify-center h-64 w-full lg:w-1/4">
					<ul className="w-full max-lg:text-center">
						<li className="font-sans text-2xl font-bold tracking-wide pb-4">SOCIAL</li>
						<li className="font-sans font-bold text-lg py-2">Find us on social</li>
						<li>
							<a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
								instagram
							</a>{" "}
							•{" "}
							<a href="http://fb.com" target="_blank" rel="noopener noreferrer">
								facebook
							</a>{" "}
							•{" "}
							<a href="http://x.com" target="_blank" rel="noopener noreferrer">
								X(twitter)
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
