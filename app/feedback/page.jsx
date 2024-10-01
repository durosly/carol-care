import Image from "next/image";
import React from "react";
import FeedBackForm from "../components/feedback-form";

function FeedbackPage() {
	return (
		<main className="font-sans px-5 mb:px-10 mb-20 pt-10">
			<div className="mb-20">
				<div className="mb-20">
					<h1 className="font-bold text-4xl mb-5">Feedback</h1>

					<p className="text-xs leading-2 text-gray-500">
						At Carol Care Medical Inc., your needs are our priority. Whether you&apos;re seeking more information about our medical staffing
						services, home cleaning for medical facilities, or event catering, our team is ready to assist you. We pride ourselves on offering
						personalized and responsive service tailored to meet your unique requirements.
					</p>
				</div>
				<div className="w-full lg:w-3/4 h-80 mx-auto rounded-md aspect-16/9 overflow-hidden relative">
					<Image
						alt=""
						fill
						className="object-cover"
						src={"https://images.pexels.com/photos/7564196/pexels-photo-7564196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
					/>
				</div>
			</div>
			<div className="max-w-md mx-auto">
				<div className="mb-5">
					<p className="font-semibold">Get in Touch with Us Today</p>
					<p>We&apos;re Here to Help</p>
				</div>
				<FeedBackForm />
			</div>

			<div className="mb-20"></div>
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
										Our doors are always open to you. Whether you need expert medical assistance or personalized home
										care, we are here to help.
									</p>
									<p className="mt-2 mb-6 leading-loose text-white">9 Clutterbuck Lane, Ajax Ontario, Canada</p>
									<h2 className="text-3xl lg:text-4xl font-semibold text-white uppercase">Call us :</h2>
									<p className="mt-2 mb-6 leading-loose text-white">+16475512566</p>
									<a
										className="inline-block py-4 px-8 text-xs border bg-black text-white uppercase tracking-widest font-semibold leading-none hover:bg-white hover:border-white hover:text-black transition duration-300 rounded-md"
										href="tel:+16475512566">
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
	);
}

export default FeedbackPage;
