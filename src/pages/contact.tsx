import ContactForm from "./components/contactForm";

const ContactPage = () => {
	return (
		<div className="flex h-1/5 w-full mb-8 max-w-[1420px] m-auto min-h-[50vh]">
			<img
				className="ml-8 w-[20vh] h-full object-cover ml-auto mr-2 sm:mr-24"
				src={require("../assets/mail_icon.png")}
				alt="contact"
			/>
			<ContactForm />
		</div>
	);
};

export default ContactPage;
