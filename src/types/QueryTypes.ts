interface Menu {
	id: number;
	title: string;
	description: string;
	menu_items: Array<MenuItem>;
	preview: Preview;
	slug?: string;
}

interface CategoryMenu extends Menu {
	categories: {
		[index: string]: Array<MenuItem>;
	};
}

type Preview = {
	formats: {
		large?: ImageFormat;
		medium?: ImageFormat;
		small?: ImageFormat;
		thumbnail?: ImageFormat;
	};
	width: number;
	height: number;
	alternativeText: string;
	url: string;
};

type ImageFormat = {
	url: string;
	size: number;
	width: number;
	height: number;
};

interface MenuItem {
	id: number;
	preview: Preview;
	description: string;
	title: string;
	price: number;
}

interface Section {
	id: number;
	preview: Array<Preview>;
	title: string;
	subtitle: string;
	description: string;
}

export type { Menu, CategoryMenu, Preview, ImageFormat, MenuItem, Section };
