import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ImageGallery from "react-image-gallery";

import { getImageUrl } from "../../../util/getImageUrl";

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
	title: string;
	descr: string;
	preview: {
		original: string;
		thumbnail: string;
	};
	slug: string;
}

/**
 * A gallery of images with dots on the right side and swiping / clicking functionality,
 * will default to filling the screen
 */
const FeaturedItemGallery: React.FC<FeaturedItemGalleryProps> = ({}) => {
	const featuredItems: Array<FeaturedItem> = useStaticQuery(
		featuredItemImageQuery
	).allStrapiCategory.nodes[0].menu_items.map((menuItem: any) => {
		return {
			slug: menuItem.slug,
			title: menuItem.title,
			descr: menuItem.description,
			preview: {
				original: getImageUrl(menuItem.preview.formats.large.url),
			},
		};
	});

	const [title, setTitle] = React.useState<string>(featuredItems[0].title);
	const [descr, setDescr] = React.useState<string>(featuredItems[0].descr);
	const [slug, setSlug] = React.useState<string>(featuredItems[0].slug);
	// const [activeItem, setActiveItem] = React.useState<number>(0);

	const updateActiveItem = (index: number) => {
		// setActiveItem(index);
		setSlug(featuredItems[index].slug);
		setTitle(featuredItems[index].title);
		setDescr(featuredItems[index].descr);
	};

	// React.useEffect(()=>{
	// 	updateActiveItem(0);
	// }, [])

	return (
		<div className="FeaturedItemGalleryContainer">
			<ImageGallery
				items={featuredItems.map((i) => {
					return i.preview;
				})}
				onBeforeSlide={updateActiveItem}
				showThumbnails={false}
				showFullscreenButton={false}
				showPlayButton={false}
				infinite={true}
				// showNav={false}
				autoPlay={true}
				slideInterval={5000}
				additionalClass="featuredItemGallery"
				renderItem={(i) => {
					return (
						<FeaturedItem
							slug={slug}
							imgSrc={i.original}
							title={title}
							descr={descr}
						></FeaturedItem>
					);
				}}
			></ImageGallery>
		</div>
	);
};

export { FeaturedItemGallery };
