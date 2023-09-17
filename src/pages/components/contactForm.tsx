import React, { useState } from "react";

const ContactForm: React.FC = () => {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [body, setBody] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(`Email: ${email}\nSubject: ${subject}\nBody: ${body}`);
		window.open(`mailto:email?subject=${subject}&body=${body}`, "_blank");
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-md sm:mr-auto mr-2">
			<div className="mb-4">
				<label
					htmlFor="email"
					className="block text-gray-700 font-bold mb-2"
				>
					Email
				</label>
				<input
					type="email"
					id="email"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Enter your email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					required
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="subject"
					className="block text-gray-700 font-bold mb-2"
				>
					Subject
				</label>
				<input
					type="text"
					id="subject"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Enter the subject"
					value={subject}
					onChange={(event) => setSubject(event.target.value)}
					required
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="body"
					className="block text-gray-700 font-bold mb-2"
				>
					Body
				</label>
				<textarea
					id="body"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Enter the message body"
					value={body}
					onChange={(event) => setBody(event.target.value)}
					required
				/>
			</div>
			<div className="flex justify-left">
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Send
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
