import React, { useState } from "react";
import { Illustration } from "../../models";
import ImagePreview from "./imagePreview";

interface Props extends Illustration {
	selectedCollection: string;
	setSelectedCollection: React.Dispatch<React.SetStateAction<string>>;
}

const IllustrationItem: React.FC<Props> = ({
	name,
	date,
	src,
	categories,
	tags,
	selectedCollection,
	setSelectedCollection,
}) => {
	const [showPreview, setShowPreview] = useState(false);

	const handlePreviewClick = () => {
		setShowPreview(true);
	};

	const handleClosePreview = () => {
		setShowPreview(false);
	};

	const handleClick = () => {
		if (showPreview) return;

		if (tags.length > 0 && selectedCollection === "") {
			setSelectedCollection(tags[0]);
		} else {
			handlePreviewClick();
		}
	};

	return (
		<div
			data-aos={`fade-up`}
			className="grid place-content-center mb-8 relative cursor-pointer px-2 pt-2 bg-[#f5efe1] rounded-2xl shadow-md mx-3 md:mx-2"
			onClick={handleClick}
		>
			{tags.length > 0 &&
				selectedCollection === "" &&
				!categories.includes("project") && (
					<div className="absolute h-8 top-8 right-0 transform -translate-y-full bg-gray-800 text-white px-2 py-1 rounded-bl-lg">
						Collection
					</div>
				)}
			{categories.includes("project") && selectedCollection === "" && (
				<div className="absolute h-8 top-8 right-0 transform -translate-y-full bg-gray-800 text-white px-2 py-1 rounded-bl-lg">
					Project
				</div>
			)}
			<img
				className="rounded-lg"
				src={require(`../../assets/illustrations/${src}`)}
				alt={`${name} illustration`}
			/>
			<div className="flex flex-row w-full justify-between bg-[#f4f0e9] rounded-xl pb-2 mb-2">
				<div className="block mt-2 h-full">
					<div className="pl-2">{name}</div>
					<div className="pl-2 text-sm opacity-50 capitalize">
						{date}
					</div>
				</div>
				{selectedCollection === "" && (
					<div className="my-2 h-full content-center">
						{tags.map((tag) => (
							<div
								key={tag}
								className="inline-block bg-[#928b8b] text-[#ffffff] hover:bg-[#817676] rounded-full py-[2px] px-2 mr-2 cursor-pointer transition-colors"
								onClick={() => {
									setSelectedCollection(tag);
								}}
							>
								{tag}
							</div>
						))}
					</div>
				)}
			</div>
			<div className="hidden">
				{categories.map((category) => (
					<div
						key={category}
						className="inline-block bg-gray-200 text-gray-700 rounded-full px-2 mr-2 mb-2"
					>
						{category}
					</div>
				))}
			</div>

			{showPreview && (
				<ImagePreview
					{...{ name, date, src, categories, tags }}
					onClose={handleClosePreview}
				/>
			)}
		</div>
	);
};

export default IllustrationItem;
