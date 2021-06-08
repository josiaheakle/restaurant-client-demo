interface Menu {
	id: string;
	title: string;
	description: string;
	menu_items: Array<MenuItem>;
	preview: Preview;
	slug?: string;
}

type Preview = {
	formats: {
		large?: ImageFormat;
		medium?: ImageFormat;
		small?: ImageFormat;
		thumbnail?: ImageFormat;
	};
	alternativeText: string;
	url?: string;
};

type ImageFormat = {
	url: string;
	size: number;
};

interface MenuItem {
	id: string;
	preview: Preview;
	description: string;
	title: string;
}

interface Section {
	id: string;
	preview: Preview;
	title: string;
	subtitle: string;
	description: string;
}

export type { Menu, Preview, ImageFormat, MenuItem, Section };
