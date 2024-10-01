import Image from "next/image";
import logoImg from "@/logos/logo-primary.png";
import Link from "next/link";

function ContactPage() {
	return (
		<main className="font-sans">
			<section className="pt-10">
				<div>
					<div className="w-52 h-52 relative mx-auto">
						<Image src={logoImg} alt="carol card" fill className="object-contain" placeholder="blur" />
					</div>
				</div>

				<div className="flex items-center justify-center p-5">
					<ul>
						<li className="font-extrabold tracking-widest pb-4 text-3xl lg:text-5xl text-center uppercase">Carol Care Medical Inc.</li>
						<li className="font-extrabold tracking-wide pb-4 text-3xl lg:text-5xl text-center">9 Clutterbuck Lane</li>
						<li className="font-extrabold tracking-wide pb-4 text-3xl lg:text-5xl text-center">Ajax Ontario, Canada</li>
						<li className="font-extrabold tracking-wide pb-4 text-3xl lg:text-5xl text-center">+16475512566</li>
						<li className="font-extrabold tracking-wide pb-4 text-3xl lg:text-5xl text-center">info@carolmedicare.com</li>
					</ul>
				</div>
			</section>
			<section className="pt-20">
				<div className="flex flex-wrap md:flex-nowrap w-full p-5">
					<div className="flex flex-col p-5 items-center text-center justify-center w-full lg:w-1/2">
						<h2 className="text-4xl tracking-widest uppercase pb-5">Can&apos;t wait to hear from you</h2>
						<p className="text-2xl mb-12 text-center">You can reach us on our contacts or social media handles</p>
						<div>
							<Link
								className="inline-flex h-12 max-md:text-sm animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 uppercase"
								href="/feedback">
								Leave us a message
							</Link>
						</div>
					</div>
					<div className="flex items-center border justify-center p-5 mx-auto w-full h-52 lg:h-auto lg:w-1/2 relative rounded-md overflow-hidden">
						<Image
							alt="Menu Link Image"
							className="object-cover"
							fill
							src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						/>
					</div>
				</div>
			</section>
			<div className="flex w-full h-64 items-center justify-center">
				<p className="text-5xl">See you soon</p>
			</div>
		</main>
	);
}

export default ContactPage;
