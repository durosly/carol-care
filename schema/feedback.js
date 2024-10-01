import { z } from "zod";

const FeedbackSchema = z.object({
	email: z.string().email({ message: "Invalid email" }).optional(),
	username: z.string().min(3, { message: "Name must be at least 3 characters" }),
	title: z.string().min(1, { message: "Title is required" }),
	feedback: z.string().min(10, { message: "Feedback must be at least 10 characters long" }),
});

export default FeedbackSchema;
