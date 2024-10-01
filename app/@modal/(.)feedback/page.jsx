import FeedBackForm from "@/app/components/feedback-form";
import React from "react";

function FeedbackWithModalPage() {
	return (
		<div className="fixed z-50 inset-0 bg-black/20 backdrop-blur flex items-end md:items-center justify-center">
			<div className="relative bg-white max-sm:px-5 p-10 rounded-3xl max-md:rounded-b-none md:rounded-md shadow-xl">
				<button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">✕</button>
				<div className="my-5">
					<h3 className="font-bold text-lg">We are open to receive feedback!</h3>
					<p>Give your feedback or review</p>
				</div>
				<FeedBackForm />
			</div>
		</div>
	);
}

export default FeedbackWithModalPage;
