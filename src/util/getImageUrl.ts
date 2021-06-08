import { Preview } from "../types/QueryTypes";

const getImageUrl = (imageName: string): string => {
	return `${process.env.GATSBY_API_URL}${imageName}`;
};

const getBestImage = (preview: Preview): string => {
	return (
		preview.formats.large?.url ||
		preview.formats.medium?.url ||
		preview.formats.small?.url ||
		preview.formats.thumbnail?.url ||
		preview.url ||
		""
	);
};

export { getImageUrl, getBestImage };
