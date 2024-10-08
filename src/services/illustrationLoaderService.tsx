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
    // Sort by date
    return this.illustrations.sort((a: Illustration, b: Illustration) => {
      let date_a = new Date(a.date).getTime();
      let date_b = new Date(b.date).getTime();
      return date_b - date_a;
    });
  }

  getProjectIllustrations(): Illustration[] {
    return this.illustrations.filter((illustration) =>
      illustration.categories.includes("project")
    );
  }
}

export default IllustrationLoaderService;
