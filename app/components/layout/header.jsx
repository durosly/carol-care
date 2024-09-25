"use client";
import LogoMainImg from "@/logos/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Header() {
	const path = usePathname();
	const [showNav, setShowNav] = useState(false);
	return (
		<header className={`relative flex ${path === "/" ? "h-screen" : ""}  w-full overflow-hidden font-sans`}>
			<nav
				className={`relative z-20 top-0 right-0 w-full inline-block px-10 text-2xl text-white bg-black ${
					path === "/" ? "bg-opacity-50 pt-5" : ""
				}  rounded-xl`}>
				<div className="flex justify-between items-center">
					<Link href="/" className="w-20 h-20 lg:w-32 lg:h-32 aspect-square relative">
						<Image alt="Carol Cares Logo" src={LogoMainImg} sizes="(min-width: 1040px) 128px, 80px" fill className="object-contain" />
					</Link>
					<div className="hidden lg:block">
						<ul className="flex">
							{/* <li className="px-4 py-4">
								<Link href="/menu" className="tracking-widest font-thin">
									MENU
								</Link>
							</li> */}
							<li className="px-4 py-4">
								<Link href="/about-us" className="tracking-widest">
									ABOUT US
								</Link>
							</li>
							<li className="px-4 py-4">
								<Link href="/contact" className="tracking-widest">
									CONTACT
								</Link>
							</li>
						</ul>
					</div>
					<div className="block lg:hidden">
						<button
							onClick={() => setShowNav((prev) => !prev)}
							className="block lg:hidden px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white"
							type="button">
							<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								{showNav === true ? (
									<path
										clipRule="evenodd"
										d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
										fillRule="evenodd"
									/>
								) : (
									<path
										d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
										fillRule="evenodd"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
				{showNav && (
					<div className="w-full h-full z-50  lg:flex lg:items-center lg:w-auto text-right">
						<ul className="pt-6 lg:pt-0 list-reset lg:flex justify-start flex-1 items-center">
							<li className="mr-3">
								<Link className="inline-block py-2 px-4 text-white no-underline" href="/">
									HOME
								</Link>
							</li>
							{/* <li className="mr-3">
								<Link
									className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
									href="meniu.html">
									MENU
								</Link>
							</li> */}
							<li className="mr-3">
								<Link
									className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
									href="/about-us">
									ABOUT US
								</Link>
							</li>
							<li className="mr-3">
								<Link
									className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
									href="/contact">
									CONTACT
								</Link>
							</li>
						</ul>
					</div>
				)}
			</nav>
			{path === "/" && <video autoPlay className="absolute z-10 w-full h-full object-cover" loop muted src="/videos/cover.mp4"></video>}
		</header>
	);
}

export default Header;
