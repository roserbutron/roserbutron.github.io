import { useEffect, useState } from "react";
import { Illustration } from "../models";
import IllustrationLoaderService from "../services/illustrationLoaderService";
import IllustrationGrid from "./components/illustrationGrid";
import ProjectIllustrations from "./components/illustrationsProject";

interface HomePageProps {
	action: string;
}

const HomePage = ({ action }: HomePageProps) => {
	const [illustrations, setIllustrations] = useState<Illustration[]>([]);
	const [projects, setProjects] = useState<Illustration[]>([]);
	const [selectedCollection, setSelectedCollection] = useState<string>("");
	const [selectedProject, setSelectedProject] = useState<string>("");

	useEffect(() => {
		const illustrationLoaderService = new IllustrationLoaderService(
			"src/illustrations.json"
		);
		illustrationLoaderService
			.load()
			.then(() => {
				setIllustrations(illustrationLoaderService.getIllustrations());
				setProjects(
					illustrationLoaderService.getProjectIllustrations()
				);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		if (action === "clear") {
			setSelectedCollection("");
			setSelectedProject("");
		}
	}, [action]);

	useEffect(() => {
		if (selectedCollection !== "") {
			const updatedIllustrations = illustrations.filter((illustration) =>
				illustration.tags.includes(selectedCollection)
			);
			setIllustrations(updatedIllustrations);
			let isProject = true;

			// check if all illustrations are project illustrations
			updatedIllustrations.forEach((illustration) => {
				if (!illustration.categories.includes("project")) {
					isProject = false;
				}
			});
			const updatedProjects = projects.filter((project) =>
				project.tags.includes(selectedCollection)
			);

			if (isProject) {
				setSelectedProject(selectedCollection);
				setProjects(updatedProjects);
			}
			window.scrollTo(0, 0);
		} else {
			const illustrationLoaderService = new IllustrationLoaderService(
				"src/illustrations.json"
			);
			illustrationLoaderService
				.load()
				.then(() => {
					setIllustrations(
						illustrationLoaderService.getIllustrations()
					);
					setProjects(
						illustrationLoaderService.getProjectIllustrations()
					);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [selectedCollection]);

	return (
		<div>
			{selectedProject === "" && (
				<>
					{selectedCollection !== "" && (
						<div className="text-center text-2xl font-bold mt-8 mb-4">
							{selectedCollection}
						</div>
					)}
					<IllustrationGrid
						illustrations={
							selectedCollection === ""
								? illustrations.filter(
										(illustration) =>
											!illustration.hidden &&
											!illustration.categories.includes(
												"project"
											)
								  )
								: illustrations
						}
						selectedCollection={selectedCollection}
						setSelectedCollection={setSelectedCollection}
					/>
					{selectedCollection === "" && (
						<>
							<div className="text-center text-2xl font-bold mt-8 mb-4">
								Projects
							</div>
							<IllustrationGrid
								illustrations={
									selectedCollection === ""
										? projects.filter(
												(project) => !project.hidden
										  )
										: projects
								}
								selectedCollection={selectedCollection}
								setSelectedCollection={setSelectedCollection}
							/>
						</>
					)}
				</>
			)}
			{selectedProject === "" && selectedCollection !== "" && (
				<div
					className="rounded-full bg-[#AAB000] bg-opacity-80 text-black transition duration-200 ease-in-out text-center w-fit px-4 py-2 mb-3 cursor-pointer m-auto"
					onClick={() => {
						setSelectedCollection("");
						setSelectedProject("");
					}}
				>
					Back to main page
				</div>
			)}
			{selectedProject !== "" && (
				<ProjectIllustrations illustrations={projects} />
			)}
			{selectedProject !== "" && (
				<div
					className="rounded-full bg-[#AAB000] bg-opacity-80 text-black transition duration-200 ease-in-out text-center w-fit px-4 py-2 mb-3 cursor-pointer m-auto"
					onClick={() => {
						setSelectedCollection("");
						setSelectedProject("");
					}}
				>
					Back to main page
				</div>
			)}
		</div>
	);
};

export default HomePage;
