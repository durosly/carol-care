import Image from "next/image";
import React from "react";
import menuData from "./menu.json";
import Link from "next/link";

function MenuPage() {
	return (
		<section className="mt-10 md:mt-20 font-sans px-5 md:px-10">
			<div className="md:text-center mb-10 md:mb-20">
				<h1 className="text-3xl md:text-5xl tracking-widest uppercase font-bold">Menu</h1>
			</div>

			<ul className="max-w-4xl mx-auto mb-20">
				{menuData.menu.map((menu, i) => (
					<li key={menu.category + i} className="mb-14">
						<h2 className="text-2xl font-bold mb-10">{menu.category}</h2>

						<ul className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-20 items-start ">
							{menu.dishes.map((dish, i) => (
								<li key={dish.title + i}>
									<div>
										<div className="relative h-[200px] rounded-md overflow-hidden mb-5">
											<Image
												src={dish.image}
												alt="amala"
												fill
												className="object-cover"
												sizes="(min-width: 1040px) 285px, (min-width: 780px) 27.08vw, (min-width: 640px) calc(50vw - 50px), calc(100vw - 80px)"
											/>
										</div>
										<div>
											<h2 className="text-xl font-bold">{dish.title}</h2>
											<p className="text-sm">{dish.description}</p>
										</div>
									</div>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>

			<section className="mt-10 mb-20">
				<div className="flex flex-wrap md:flex-nowrap w-full p-5">
					<div className="flex flex-col p-5 items-center text-center justify-center w-full lg:w-1/2">
						<h2 className="text-4xl tracking-widest uppercase pb-5">Can&apos;t wait to hear from you</h2>
						<p className="text-2xl mb-12 text-center">You can reach us on our contacts or social media handles</p>
						<div>
							<Link
								className="inline-flex h-12 max-md:text-sm animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 uppercase"
								href="/feedback">
								Leave us a review
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
		</section>
	);
}

export default MenuPage;
