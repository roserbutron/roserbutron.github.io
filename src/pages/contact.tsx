import ContactForm from "./components/contactForm";

const ContactPage = () => {
	return (
		<div className="block md:flex h-1/5 w-full mb-8 max-w-[1420px] m-auto min-h-[50vh]">
			<img
				className="md:ml-48 w-[20vh] h-full object-cover mx-auto md:mr-2 sm:mr-24 self-center"
				src={require("../assets/mail_icon.png")}
				alt="contact"
			/>
			<ContactForm />
		</div>
	);
};

export default ContactPage;
