import { getImage } from "gatsby-plugin-image";
import { ImageFormat, Preview } from "../types/QueryTypes";

// const getImageUrl = (imageName: string): string => {
// 	return `${process.env.GATSBY_API_URL}${imageName}`;
// };

// const getBestImage = (preview: Preview): string => {
// 	return (
// 		preview.formats.large?.url ||
// 		preview.formats.medium?.url ||
// 		preview.formats.small?.url ||
// 		preview.formats.thumbnail?.url ||
// 		preview.url ||
// 		""
// 	);
// };

class ImageHandler {
	static getThumbnail(image: Preview): string {
		return this.getImageUrl(image.formats.thumbnail?.url || "");
	}

	static getBestImageUrl(image: Preview): string {
		return this.getImageUrl(this.getBestImage(image));
	}

	static getImageUrl(imageName: string): string {
		return `${process.env.GATSBY_API_URL}${imageName}`;
	}

	static getBestImage(image: Preview): string {
		return (
			image.url ||
			image.formats.large?.url ||
			image.formats.medium?.url ||
			image.formats.small?.url ||
			image.formats.thumbnail?.url ||
			""
		);
	}

	static getImageByDimension(image: Preview, minWidth: number = 1500) {
		// find the width closest to the min width

		const imageWidths: Array<{ [index: string]: number }> = Object.values(
			image.formats
		).map((format: ImageFormat, i: number) => {
			const index = Object.keys(image.formats)[i];
			const obj: { [index: string]: number } = {};
			obj[index] = format.width;
			return obj;
		});
		imageWidths.push({ original: image.width });
		return imageWidths.find((val) => val);
	}
}

export { ImageHandler };
