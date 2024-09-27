import Image from "next/image";
import CEOImg from "@/public/images/ceo.jpg";

function AboutUsPage() {
	return (
		<main className="font-sans px-10 mb-20 pt-10">
			<div className="mb-20">
				<div className="mb-20">
					<h1 className="font-bold text-4xl mb-5">About Us</h1>
					<p className="text-xl leading-8 text-gray-500">
						At Carol Care Medical Incorporated, we are committed to improving the quality of life through a holistic approach to service
						delivery. With over a decade of experience, we are shaping a better future by offering top-tier solutions in various industries.
					</p>
				</div>
				<div className="w-full lg:w-3/4 h-80 mx-auto rounded-md aspect-16/9 overflow-hidden relative">
					<Image
						alt=""
						fill
						className="object-cover"
						src={"https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
					/>
				</div>
			</div>

			<section className="py-14 lg:py-24 relative z-0 bg-gray-50 rounded-md">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
					<h1 className="text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
						Tailored Solutions for Your Needs
					</h1>
					<p className="text-center text-base font-normal leading-7 text-gray-500 mb-9">
						At Carol Care Medical Incorporated, we understand that every client is unique. Our services are designed to provide customized
						solutions, ensuring that your specific needs are met with precision and care. Whether you&apos;re looking for professional catering,
						specialized medical home cleaning, or reliable medical staffing, we are here to support you every step of the way.
					</p>
				</div>
			</section>

			<section className="py-14 lg:py-24 relative">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
						<div className="max-lg:mx-auto w-full  rounded-md overflow-hidden h-[300px] lg:h-[500px] relative lg:sticky top-5">
							<Image src={CEOImg} alt="CEO" className="object-cover object-center" fill />
						</div>
						<div className="lg:pl-[100px] flex items-center">
							<div className="data w-full">
								<h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9  relative">
									About Carol Odiong Eneh - CEO
								</h2>
								<div className="space-y-4">
									<p className="font-normal leading-8 text-gray-500  max-w-2xl mx-auto">
										Carol Odiong Eneh is a visionary leader with a passion for innovation and excellence. As the CEO of
										Carol Care Medical Incorporated, she leads a diverse team of professionals dedicated to exceeding
										client expectations.
									</p>
									<p className="font-normal leading-8 text-gray-500  max-w-2xl mx-auto">
										Under her leadership, the company has thrived, specializing in Catering Services for events,
										delivering both African and continental dishes, as well as Medical Home Cleaning, having partnered
										with renowned medical brands like Revera Long Term Home, LivingWater Medical Agency, and Ajax
										Pickering Lake Ridge Hospital. Additionally, Carol Care excels in Medical Staffing, providing
										top-tier healthcare professionals to meet the needs of clinics and hospitals.
									</p>
									<p className="font-normal leading-8 text-gray-500  max-w-2xl mx-auto">
										Carol&apos;s success is driven by her ability to inspire, her commitment to excellence, and her deep
										care for the well-being of both her team and the communities they serve.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 lg:py-24 relative">
				<h2 className=" font-bold text-4xl lg:text-5xl text-black mb-9 relative">Our Services</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					<div className="bg-gray-50 rounded-md p-5">
						<h3 className="text-xl font-bold">Catering Services</h3>
						<p className="text-base font-normal leading-7 text-gray-500">
							We specialize in providing world-class catering for events, offering a range of dishes, including African and continental
							cuisines, all tailored to meet the specific needs of your event.
						</p>
					</div>
					<div className="bg-gray-50 rounded-md p-5">
						<h3 className="text-xl font-bold">Medical Home Cleaning</h3>
						<p className="text-base font-normal leading-7 text-gray-500">
							Our team has extensive experience working with notable medical institutions, providing professional cleaning services that
							adhere to strict medical standards. Clients include Revera Long Term Home, LivingWater Medical Agency, and Ajax Pickering
							Lake Ridge Hospital.
						</p>
					</div>
					<div className="bg-gray-50 rounded-md p-5">
						<h3 className="text-xl font-bold">Medical Staffing</h3>
						<p className="text-base font-normal leading-7 text-gray-500">
							We supply highly qualified and vetted healthcare professionals to clinics, hospitals, and medical facilities, ensuring the
							highest level of care and expertise.
						</p>
					</div>
				</div>
			</section>

			<section className="py-14 lg:py-24 relative">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
					<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
						<div className="lg:pr-24 flex items-center">
							<div className=" w-full">
								{/* <div className="max-lg:mx-auto w-full  rounded-md overflow-hidden h-[300px] lg:h-[500px] relative lg:sticky top-5">
									<Image
										src={
											"https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										}
										alt="About Us tailwind page"
										className="object-cover object-center"
										fill
									/>
								</div> */}
								{/* <img
									src="https://pagedone.io/asset/uploads/1702034785.png"
									alt="About Us tailwind page"
									className="block lg:hidden mb-9 mx-auto object-cover"
								/> */}
								<h2 className="font-bold text-4xl lg:text-5xl text-black mb-9">Since 2005, Delivering Excellence</h2>
								<div>
									<div className="mb-5">
										<h3 className="font-bold">Mission</h3>
										<p className="font-normal text-xl leading-8 text-gray-500 ">
											Our mission is to continuously enhance the quality of life for our clients and patients
											through the services we provide, ensuring excellence and satisfaction.
										</p>
									</div>
									<div className="mb-5">
										<h3 className="font-bold">Vission</h3>
										<p className="font-normal text-xl leading-8 text-gray-500 ">
											We aim to offer verified solutions and services that not only meet but exceed expectations,
											setting new standards in each industry we operate in.
										</p>
									</div>
									<div className="">
										<h3 className="font-bold">Values</h3>
										<p className="font-normal text-xl leading-8 text-gray-500 ">
											Our core values are trust, loyalty, pride, and respect—qualities that define our commitment
											to excellence.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="max-lg:mx-auto w-full  rounded-md overflow-hidden h-[300px] lg:h-[500px] relative lg:sticky top-5">
							<Image
								src={
									"https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								}
								alt="About Us"
								className="object-cover object-center"
								fill
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="pt-20">
				<div className="flex flex-wrap md:flex-nowrap w-full p-5">
					<div className="flex flex-col p-5 items-center justify-center w-full lg:w-1/2">
						<h2 className="text-4xl tracking-widest uppercase pb-5">Get in Touch</h2>
						<p className="leading-8 mb-12">
							We&apos;d love to hear from you! Whether you&apos;re interested in our catering, cleaning, or staffing services, or just
							want to learn more about how we can assist, you can reach us through our social media platforms or contact us directly.
						</p>
					</div>
					<div className="flex items-center justify-center p-5 mx-auto w-full h-52 lg:h-auto lg:w-1/2 relative rounded-md overflow-hidden">
						<Image
							alt="Menu Link Image"
							className="object-cover"
							fill
							src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}

export default AboutUsPage;
