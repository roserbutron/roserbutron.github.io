export interface Illustration {
	name: string;
	date: string;
	src: string;
	categories: string[];
	tags: string[];
	hidden?: boolean;
	desc?: string;
}
