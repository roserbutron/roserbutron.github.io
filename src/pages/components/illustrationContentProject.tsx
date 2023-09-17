import React, { useState } from "react";
import { Illustration } from "../../models";
import ImagePreview from "./imagePreview";

interface Props extends Illustration {}

const IllustrationContent: React.FC<Props> = ({
	name,
	date,
	src,
	categories,
	tags,
	desc,
}) => {
	const [showPreview, setShowPreview] = useState(false);

	const handlePreviewClick = () => {
		setShowPreview(true);
	};

	const handleClosePreview = () => {
		setShowPreview(false);
	};

	return (
		<div className="mx-auto place-content-center mb-8 max-w-[1280px]">
			<img
				className="rounded-lg"
				src={require(`../../assets/illustrations/${src}`)}
				alt="illustration"
				onClick={() => {
					handlePreviewClick();
				}}
			/>
			{desc && <div className="mt-3">{desc}</div>}

			{showPreview && (
				<ImagePreview
					{...{ name, date, src, categories, tags }}
					onClose={handleClosePreview}
				/>
			)}
		</div>
	);
};

export default IllustrationContent;
