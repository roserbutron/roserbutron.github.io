import React from "react";
import { Illustration } from "../../models";
import IllustrationContent from "./illustrationContentProject";

type ProjectIllustrationsProps = {
	illustrations: Illustration[];
};

const ProjectIllustrations: React.FC<ProjectIllustrationsProps> = ({
	illustrations,
}) => {
	const projectIllustrations = illustrations.filter((illustration) =>
		illustration.categories.includes("project")
	);

	return (
		<div className="grid gap-8 mx-8 lg:mx-0">
			{projectIllustrations.map((illustration) => (
				<IllustrationContent key={illustration.src} {...illustration} />
			))}
		</div>
	);
};

export default ProjectIllustrations;
