import React, { useState } from "react";

const ContactForm: React.FC = () => {
	const [subject, setSubject] = useState("");
	const [body, setBody] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		window.open(`mailto:roserbutron@gmail.com?subject=${subject}&body=${body}`, "_blank");
	};

	return (
		<form onSubmit={handleSubmit} className="w-[350px] max-w-lg mx-auto">
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
					className="h-[350px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Enter the message body"
					value={body}
					onChange={(event) => setBody(event.target.value)}
					required
				/>
			</div>
			<div className="flex justify-left">
				<button
					type="submit"
					className="bg-[#ff3f8a] hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  hover:text-[#ffffff] transition duration-200 ease-in-out"
				>
					Send
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
