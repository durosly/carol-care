import Image from "next/image";
import React from "react";
import menuData from "./menu.json";

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
		</section>
	);
}

export default MenuPage;
