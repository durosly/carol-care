"use client";
import FeedbackSchema from "@/schema/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function FeedBackForm() {
	const toastRef = useRef(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(FeedbackSchema),
	});

	const { isPending, mutate } = useMutation({
		mutationFn: async (data) => {
			toastRef.current = toast.loading("Sending feedback...");
			const response = await axios.post("/api/send-feedback", data);
			return response.data;
		},
		onSuccess: () => {
			// Invalidate and refetch
			toast.success("Feedback sent successfully!", { id: toastRef.current });
			reset();
		},

		onError: () => {
			toast.error("Something went wrong", { id: toastRef.current });
		},
	});

	const onSubmit = (data) => {
		mutate(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-sans">
			<div className="input input-bordered flex items-center gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
					<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
					<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
				</svg>
				<input type="text" className="grow" placeholder="Email" {...register("email")} />
			</div>
			{errors.email && <p className="text-red-500">{errors.email.message}</p>}

			<div className="input input-bordered flex items-center gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
					<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
				</svg>
				<input type="text" className="grow" placeholder="Username" {...register("username")} />
			</div>
			{errors.username && <p className="text-red-500">{errors.username.message}</p>}

			<div className="input input-bordered flex items-center gap-2">
				<input type="text" className="grow" placeholder="Title" {...register("title")} />
			</div>
			{errors.title && <p className="text-red-500">{errors.title.message}</p>}

			<div className="form-control">
				<textarea className="textarea textarea-bordered h-24" placeholder="Feedback / Review" {...register("feedback")}></textarea>
			</div>
			{errors.feedback && <p className="text-red-500">{errors.feedback.message}</p>}

			<button
				type="submit"
				disabled={isPending}
				className="block w-full py-4 px-8 text-xs border bg-black text-white uppercase tracking-widest font-semibold leading-none hover:bg-white  hover:text-black transition duration-300 rounded-md">
				Send
			</button>
		</form>
	);
}

export default FeedBackForm;
