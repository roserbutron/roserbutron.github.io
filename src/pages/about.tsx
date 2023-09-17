const AboutPage = () => {
	return (
		<div className="container mx-auto py-8 min-h-[50vh]">
			<div className="text-center text-2xl font-bold mb-4">About Me</div>
			<div className="max-w-2xl mx-auto text-lg leading-relaxed px-4">
				<img className="pb-8" src={require("../assets/roser.png")} />
				My name is Roser Butrón Isern, I’m an illustrator and graphic
				designer from Spain. I am focused on illustration, especially
				exploring the world of nature and botany, and want to capture it
				on canvas with vivid colors and different textures.
			</div>
		</div>
	);
};

export default AboutPage;
