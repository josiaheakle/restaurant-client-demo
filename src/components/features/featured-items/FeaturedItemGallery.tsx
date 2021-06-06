import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ImageGallery from "react-image-gallery";

import { getImageUrl } from "../../../util/getImageUrl";

// @ts-ignore
import  "./FeaturedItem.css";

const featuredItemImageQuery = graphql`
	query {
		allStrapiCategory(filter: { title: { eq: "Featured" } }) {
			nodes {
				menu_items {
					preview {
						url
						formats {
							large {
								url
							}
							thumbnail {
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
}

/**
 * A gallery of images with dots on the right side and swiping / clicking functionality,
 * will default to filling the screen
 */
const FeaturedItemGallery: React.FC<FeaturedItemGalleryProps> = ({}) => {

	const [title, setTitle] = React.useState<string>();
	const [descr, setDescr] = React.useState<string>();
	const [activeItem, setActiveItem] = React.useState<number>(0);

	const featuredItems: Array<FeaturedItem> = useStaticQuery(
		featuredItemImageQuery
	).allStrapiCategory.nodes[0].menu_items.map((menuItem: any) => {
		return {
			title: menuItem.title,
			descr: menuItem.description,
			preview: {
				original: getImageUrl(menuItem.preview[0].formats.large.url),
				thumbnail: getImageUrl(menuItem.preview[0].formats.thumbnail.url),
			},
		};
	});

	const updateActiveItem = (index: number) => {
		setActiveItem(index);
		setTitle(featuredItems[index].title);
		setDescr(featuredItems[index].descr);
	};

	React.useEffect(()=>{
		updateActiveItem(0);
	}, [])

	return (
		<>
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
                renderItem={(i) => {
                    // console.log(i);
                    return (
                        <div className='featuredItem' style={{backgroundImage:`url(${i.original})`}}>
                            <div className='featuredItemInfo'>
								<div>
									<h3>{title}</h3>
									<span>{descr}</span>
								</div>
                            </div>
                        </div>
                    )
                    
                }}
			>
            </ImageGallery>

		</>
	);
};

export { FeaturedItemGallery };
