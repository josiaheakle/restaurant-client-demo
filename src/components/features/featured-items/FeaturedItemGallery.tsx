import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

// import { getImageUrl } from "../../../util/getImageUrl";

// @ts-expect-error
import featuredImage_1 from "../../../assets/pexels-quark-studio-3201920.jpg";
// @ts-expect-error
import featuredImage_2 from "../../../assets/pexels-quark-studio-2.jpg";

// @ts-ignore
import "./FeaturedItem.css";
import { FeaturedItem } from "./FeaturedItem";

const featuredItemImageQuery = graphql`
	query {
		allStrapiCategory(filter: { title: { eq: "Featured" } }) {
			nodes {
				menu_items {
					slug
					preview {
						url
						alternativeText
						formats {
							large {
								url
							}
						}
					}
					description
					title
				}
			}
		}
	}
`;

interface FeaturedItemGalleryProps {}

interface FeaturedItem {
	title?: string;
	descr?: string;
	preview: ReactImageGalleryItem;
	slug?: string;
	link?: string;
}

/**
 * A gallery of images with dots on the right side and swiping / clicking functionality,
 * will default to filling the screen
 */
const FeaturedItemGallery: React.FC<FeaturedItemGalleryProps> = ({}) => {
	// const featuredItems: Array<FeaturedItem> = useStaticQuery(
	// 	featuredItemImageQuery
	// ).allStrapiCategory.nodes[0].menu_items.map((menuItem: any) => {
	// 	return {
	// 		slug: menuItem.slug,
	// 		title: menuItem.title,
	// 		descr: menuItem.description,
	// 		preview: {
	// 			original: getImageUrl(menuItem.preview.formats.large.url),
	// 		},
	// 	};
	// });

	const featuredItems: Array<FeaturedItem> = [
		{
			preview: {
				original: featuredImage_2,
				renderItem: (i) => {
					return (
						<FeaturedItem
							imgSrc={i.original}
							title={"Your restaurant here"}
							descr={
								"A new survey from MGH found that 77% of diners visit a restaurant's website before they dine in or order out from the establishment. Of that group, nearly 70% have been discouraged from visiting the restaurant because of its website, according to a press release. "
							}
							link={
								"https://www.restaurantdive.com/news/77-of-diners-visit-restaurant-websites-before-going-survey-finds/562008/#:~:text=A%20new%20survey%20from%20MGH,according%20to%20a%20press%20release."
							}
						></FeaturedItem>
					);
				},
			},
		},
		{
			preview: {
				original: featuredImage_2,
				renderItem: (i) => {
					return (
						<FeaturedItem
							imgSrc={i.original}
							title={"Take control of your image"}
							descr={
								"Your website will likely be the first impression a potential guest has of your restaurant. Make it a good one. A website gives you control over the image of your restaurant. It gives a restaurant the platform to tell their own story, in their own words (unlike third party sites). Customers will get a good idea of who you are, as well as get an idea of the overall atmosphere of the restaurant."
							}
							link={
								"https://www.qsrautomations.com/blog/restaurant-management/why-restaurants-need-website/#:~:text=A%20website%20gives%20you%20control,overall%20atmosphere%20of%20the%20restaurant."
							}
						></FeaturedItem>
					);
				},
			},
		},
	];

	return (
		<div className="FeaturedItemGalleryContainer">
			<ImageGallery
				items={featuredItems.map((i) => {
					return i.preview;
				})}
				showThumbnails={false}
				showFullscreenButton={false}
				showPlayButton={false}
				infinite={true}
				// showNav={false}
				autoPlay={true}
				slideInterval={10000}
				additionalClass="featuredItemGallery"
			></ImageGallery>
		</div>
	);
};

export { FeaturedItemGallery };
