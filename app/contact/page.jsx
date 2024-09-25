import Image from "next/image";
import logoImg from "@/logos/logo-primary.png";

function ContactPage() {
	return (
		<main className="font-sans">
			<section class="pt-10">
				<div>
					<div className="w-52 h-52 relative mx-auto">
						<Image src={logoImg} alt="carol card" fill className="object-contain" placeholder="blur" />
					</div>
				</div>

				<div class="flex items-center justify-center p-5">
					<ul>
						<li class="font-extrabold tracking-widest pb-4 text-3xl lg:text-5xl text-center uppercase">Carol Care Medical Inc.</li>
						<li class="font-extrabold tracking-wide pb-4 text-3xl lg:text-5xl text-center">9 Clutterbuck Lane</li>
						<li class="font-extrabold tracking-wide pb-4 text-3xl lg:text-5xl text-center">Ajax Ontario, Canada</li>
						<li class="font-extrabold tracking-wide pb-4 text-3xl lg:text-5xl text-center">+40742742642</li>
						<li class="font-extrabold tracking-wide pb-4 text-3xl lg:text-5xl text-center">info@carolcard.com</li>
					</ul>
				</div>
			</section>
			<section class="pt-20">
				<div class="flex flex-wrap md:flex-nowrap w-full p-5">
					<div class="flex flex-col p-5 items-center text-center justify-center w-full lg:w-1/2">
						<h2 class="text-4xl tracking-widest uppercase pb-5">Can&apos;t wait to hear from you</h2>
						<p class="text-2xl mb-12 text-center">You can reach us on our contacts or social media handles</p>
					</div>
					<div class="flex items-center justify-center p-5 mx-auto w-full h-52 lg:h-auto lg:w-1/2 relative rounded-md overflow-hidden">
						<Image
							alt="Menu Link Image"
							class="object-cover"
							fill
							src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						/>
					</div>
				</div>
			</section>
			<div class="flex w-full h-64 items-center justify-center">
				<p class="text-5xl">See you soon</p>
			</div>
		</main>
	);
}

export default ContactPage;
