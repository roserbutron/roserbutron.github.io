import data from "../illustrations.json";
import { Illustration } from "../models";
class IllustrationLoaderService {
	private illustrations: Illustration[];

	constructor(private readonly jsonUrl: string) {
		this.illustrations = [];
	}

	async load(): Promise<void> {
		this.illustrations = data as unknown as Illustration[];
	}

	getIllustrations(): Illustration[] {
		return this.illustrations;
	}

	getProjectIllustrations(): Illustration[] {
		return this.illustrations.filter((illustration) =>
			illustration.categories.includes("project")
		);
	}
}

export default IllustrationLoaderService;
