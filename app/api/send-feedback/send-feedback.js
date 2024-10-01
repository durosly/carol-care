// app/api/send-feedback/route.ts
import { NextResponse } from "next/server";
import mailer from "@/lib/mailer"; // Adjust if your path is different
import FeedbackSchema from "@/schema/feedback";

// Type for incoming request body

/**
 *
 * @param {username, email, title, feedback} req
 * @returns status 200 for valid response and 400 for invalid response
 */
export async function sendFeedback(req) {
	try {
		const body = await req.json();

		const valid = FeedbackSchema.safeParse(body);

		// Validate the request body
		if (!valid.success) {
			return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
		}

		// Prepare email options
		const mailOptions = {
			from: `"Carol Cares" <${process.env.SMTP_USER}>`, // Sender name and email
			to: process.env.ADMIN_EMAIL, // Admin email address from environment variables
			subject: `New Feedback from ${body.username}: ${body.title}`,
			text: body.feedback, // Plain text body
			html: `<p><strong>Email:</strong> ${body.email}</p>
             <p><strong>Username:</strong> ${body.username}</p>
             <p><strong>Title:</strong> ${body.title}</p>
             <p><strong>Feedback:</strong></p>
             <p>${body.feedback}</p>`, // HTML body
		};

		// Send the email using the mailer
		const info = await mailer.sendMail(mailOptions);

		// Return a success response
		return NextResponse.json({
			message: "Feedback sent successfully!",
			info: info.response,
		});
	} catch (error) {
		console.error("Error sending feedback:", error);
		return NextResponse.json({ error: "Failed to send feedback" }, { status: 500 });
	}
}
