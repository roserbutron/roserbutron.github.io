import React, { useEffect, useRef, useState } from "react";

interface Props {
	name: string;
	date: string;
	src: string;
	categories: string[];
	tags: string[];
	onClose: () => void;
}

const ImagePreview: React.FC<Props> = ({
	name,
	date,
	src,
	categories,
	tags,
	onClose,
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		document.body.classList.add("overflow-hidden");
		document.addEventListener("keydown", handleKeyDown);
		setShow(true);
		return () => {
			document.body.classList.remove("overflow-hidden");
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	return (
		<div
			className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ${
				show ? "opacity-100" : "opacity-0"
			}`}
			ref={ref}
			onClick={onClose}
		>
			<div className="transform scale-80 md:scale-[60%]">
				<img
					src={require(`../../assets/illustrations/${src}`)}
					alt="Preview"
					className="max-w-full max-h-full object-contain"
					onLoad={() => {
						ref.current?.classList.add("scale-100");
					}}
				/>
				<div className="absolute bottom-0 left-0 w-full h-10 sm:h-16 bg-black bg-opacity-50 flex justify-center items-center">
					<div className="pl-3 text-white text-md sm:text-2xl">
						{name}
					</div>
					{tags && tags.length > 0 && (
						<>
							<div className="text-white text-lg sm:text-4xl mx-4">
								-
							</div>
							<div className="text-white text-md sm:text-2xl">
								{tags.map((tag) => (
									<div key={tag} className="inline-block">
										{tag}
									</div>
								))}
							</div>
						</>
					)}
					{categories && categories.length > 0 && (
						<>
							<div className="text-white text-lg sm:text-4xl mx-4">
								-
							</div>
							<div className="text-white text-md sm:text-2xl">
								{categories.map((category) => (
									<div
										key={category}
										className="inline-block mr-2"
									>
										#{category}
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ImagePreview;
