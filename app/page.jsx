import Image from "next/image";
// import Link from "next/link";

export default function Home() {
	return (
		<>
			<main className="container max-sm:px-10 mx-auto font-sans">
				<section className="py-20">
					<div className="flex flex-wrap md:flex-nowrap p-5">
						<div
							className="flex items-center justify-center mx-auto w-full lg:w-1/2 bg-fixed bg-center object-contain rounded-md overflow-hidden"
							style={{
								backgroundImage:
									"url('https://images.unsplash.com/photo-1610963490387-0c08126eacf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
							}}>
							<div className="w-full h-full bg-black bg-opacity-75"></div>
						</div>
						<div className="flex flex-col p-5 items-center text-center justify-center w-full lg:w-1/2">
							<h2 className="text-4xl tracking-widest uppercase pb-5" data-scroll>
								Discover Our Catering Services
							</h2>
							<p className="text-2xl mb-12 p-5" data-scroll>
								Explore a world of flavors crafted with care and precision. From authentic African dishes to global continental
								favorites, our catering services bring culinary excellence to your events. Whether you&apos;re hosting a small
								gathering or a large celebration, our team ensures a dining experience that&apos;s unforgettable.
							</p>
							{/* <button className="px-3 py-4">
								<Link
									className="px-3 py-4 bg-black text-white font-sans uppercase tracking-widest border hover:text-black hover:bg-white hover:border-black transition duration-300 rounded-md"
									href="/menu">
									Go to menu
								</Link>
							</button> */}
						</div>
					</div>
				</section>
				<section className="py-20">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start  gap-x-4">
						<div className="flex flex-col items-center justify-center mb-4 lg:mb-0">
							<div className="h-64 m-5 w-full rounded-md overflow-hidden relative">
								<Image
									alt=""
									className="object-cover"
									fill
									sizes="(min-width: 1540px) 372px, (min-width: 1280px) 308px, (min-width: 1040px) 244px, (min-width: 780px) 376px, (min-width: 640px) 640px, calc(100vw - 80px)"
									src="https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								/>
							</div>
							<h2 className="font-sans text-3xl tracking-widest uppercase mb-2 text-center">Event catering</h2>
							<div className="text-center">
								<p>
									Turn your event into a culinary journey. Our professional catering services are tailored to meet your unique
									needs, ensuring your guests enjoy fresh, beautifully presented dishes
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center mb-4 lg:mb-0">
							<div className="h-64 m-5 w-full rounded-md overflow-hidden relative">
								<Image
									alt=""
									className="object-cover"
									sizes="(min-width: 1540px) 372px, (min-width: 1280px) 308px, (min-width: 1040px) 244px, (min-width: 780px) 376px, (min-width: 640px) 640px, calc(100vw - 80px)"
									fill
									src="/images/african-dish.jpg"
								/>
							</div>
							<h2 className="font-sans text-3xl tracking-widest uppercase mb-2 text-center">African Dish</h2>
							<div className="text-center">
								<p>
									Savor the rich and diverse flavors of Africa, prepared with traditional methods and ingredients that bring
									out the best in every dish
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center mb-4 lg:mb-0">
							<div className="h-64 m-5 w-full rounded-md overflow-hidden relative">
								<Image
									alt=""
									className="object-cover"
									fill
									sizes="(min-width: 1540px) 372px, (min-width: 1280px) 308px, (min-width: 1040px) 244px, (min-width: 780px) 376px, (min-width: 640px) 640px, calc(100vw - 80px)"
									src="https://images.pexels.com/photos/4669298/pexels-photo-4669298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								/>
							</div>
							<h2 className="font-sans text-3xl tracking-widest uppercase mb-2 text-center">continental dishes</h2>
							<div className="text-center">
								<p>
									Enjoy a wide variety of continental meals, featuring European-inspired cuisines that offer a fusion of
									modern and classic flavors.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center mb-4 lg:mb-0">
							<div className="h-64 m-5 w-full rounded-md overflow-hidden relative">
								<Image
									alt=""
									className="object-cover"
									fill
									sizes="(min-width: 1540px) 372px, (min-width: 1280px) 308px, (min-width: 1040px) 244px, (min-width: 780px) 376px, (min-width: 640px) 640px, calc(100vw - 80px)"
									src="https://images.pexels.com/photos/4393429/pexels-photo-4393429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								/>
							</div>
							<h2 className="font-sans text-3xl tracking-widest uppercase mb-2 text-center">Food delivery</h2>
							<div className="text-center">
								<p>
									Craving a gourmet experience at home? Our food delivery service brings restaurant-quality meals directly to
									your door
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="py-20">
					<div className="flex flex-wrap md:flex-nowrap w-full p-5">
						<div className="flex flex-col p-5 items-center text-center justify-center w-full lg:w-1/2">
							<h2 className="text-4xl tracking-widest uppercase pb-5">Only The Best Care, Always</h2>
							<p className="text-2xl mb-12 text-center">
								At Carol Care Medical Inc., we believe in delivering more than just services - we offer peace of mind. Our expert
								medical staffing solutions and home care services are designed to ensure you or your loved ones receive the highest
								standard of care. From trained medical professionals to personalized home cleaning services, we bring healthcare and
								well-being to your doorstep.
							</p>
						</div>
						<div className="flex items-center justify-center p-5 mx-auto w-full lg:w-1/2 relative rounded-md overflow-hidden">
							<Image
								fill
								alt="Menu Link Image"
								className="object-cover"
								sizes="(min-width: 1540px) 748px, (min-width: 1280px) 620px, (min-width: 1040px) 492px, (min-width: 780px) 364px, (min-width: 640px) 600px, calc(100vw - 120px)"
								src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							/>
						</div>
					</div>
				</section>
				<section
					className="my-20 bg-fixed bg-center object-contain w-full rounded-md overflow-hidden"
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1610963490387-0c08126eacf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
					}}>
					<div className="container px-4 mx-auto bg-black bg-opacity-75">
						<div className="pt-20 pb-24 px-8 md:px-16 rounded ">
							<div className="flex flex-wrap -mx-8">
								<div className="w-full lg:w-1/2 px-8 flex">
									<div className="my-auto">
										<h2 className="text-3xl lg:text-4xl font-semibold text-white uppercase">Visit Us Today</h2>
										<p className="mt-4 leading-loose font-sans uppercase tracking-wide font-bold text-white">
											Carol Care Medical Inc.
										</p>
										<p className="text-sm text-white">
											Our doors are always open to you. Whether you need expert medical assistance or personalized
											home care, we are here to help.
										</p>
										<p className="mt-2 mb-6 leading-loose text-white">9 Clutterbuck Lane, Ajax Ontario, Canada</p>
										<h2 className="text-3xl lg:text-4xl font-semibold text-white uppercase">Call us :</h2>
										<p className="mt-2 mb-6 leading-loose text-white">+40 742 742 642</p>
										<a
											className="inline-block py-4 px-8 text-xs border bg-black text-white uppercase tracking-widest font-semibold leading-none hover:bg-white hover:border-white hover:text-black transition duration-300 rounded-md"
											href="tel:+234123456789">
											Call us now
										</a>
									</div>
								</div>
								<div className="w-full lg:w-1/2 px-8 mt-12 lg:mt-0">
									<div className="embed-responsive aspect-ratio-21/9"></div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
