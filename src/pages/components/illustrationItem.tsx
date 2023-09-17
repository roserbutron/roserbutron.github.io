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

	return (
		<div className="grid place-content-center mb-8 relative">
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
				onClick={() => {
					if (tags.length > 0 && selectedCollection === "") {
						setSelectedCollection(tags[0]);
					} else {
						handlePreviewClick();
					}
				}}
			/>
			{selectedCollection === "" && (
				<div className="mt-3">
					{tags.map((tag) => (
						<div
							key={tag}
							className="inline-block bg-gray-200 text-gray-700 rounded-full px-2 mr-2 cursor-pointer"
							onClick={() => {
								setSelectedCollection(tag);
							}}
						>
							{tag}
						</div>
					))}
				</div>
			)}
			<div className={selectedCollection !== "" ? "mt-2" : ""}>
				<div className="pl-2 lg:pl-0">{name}</div>
				<div className="pl-2 lg:pl-0 text-sm opacity-50 capitalize">
					{date}
				</div>
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
