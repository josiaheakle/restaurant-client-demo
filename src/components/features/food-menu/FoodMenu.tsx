// react, gatsby
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

// components
import { FoodMenuCard } from "./FoodMenuCard";
import { ButtonLink } from "../../ui/buttons/ButtonLink";

// util
import { getImageUrl, getBestImage } from "../../../util/getImageUrl";

// types
import {
	CategoryMenu,
	Menu,
	MenuItem,
	Section,
} from "../../../types/QueryTypes";

// css
import "./FoodMenu.css";

interface FoodMenuProps {}

const query = graphql`
	{
		allStrapiMenu {
			nodes {
				title
				preview {
					formats {
						medium {
							url
							size
							width
							height
						}
						large {
							size
							url
							width
							height
						}
						small {
							url
							size
							width
							height
						}
						thumbnail {
							size
							url
							width
							height
						}
					}
					url
					alternativeText
					size
					height
					width
				}
				description
				slug
				menu_items {
					id
					preview {
						formats {
							thumbnail {
								url
								size
								height
								width
							}
							small {
								url
								size
								width
								height
							}
							large {
								url
								size
								width
								height
							}
							medium {
								url
								size
								width
								height
							}
						}
						url
						size
						alternativeText
						height
						width
					}
					description
					title
					price
				}
				id
			}
		}
		allStrapiSection(filter: { section: { eq: "menu" } }) {
			nodes {
				id
				preview {
					formats {
						thumbnail {
							url
							size
							height
							width
						}
						small {
							url
							size
							height
							width
						}
						medium {
							url
							size
							height
							width
						}
						large {
							url
							size
							height
							width
						}
					}
					url
					height
					width
					size
					alternativeText
				}
				title
				subtitle
				description
			}
		}
		allStrapiCategory {
			nodes {
				menu_items {
					id
				}
				title
			}
		}
	}
`;

interface Category {
	menu_items: Array<{ id: number }>;
	title: string;
}

const FoodMenu: React.FC<FoodMenuProps> = ({}) => {
	// query result
	const data = useStaticQuery(query);

	// Menus
	const menus: Array<CategoryMenu> = data.allStrapiMenu.nodes;

	// Menu Item categories
	const categories: Array<Category> = data.allStrapiCategory.nodes;

	// Page Section Data
	const section: Section = data.allStrapiSection.nodes[0];

	const getItemCategory = (itemId: number): string => {
		const cat = categories.find((category) => {
			const item = category.menu_items.find((item) => item.id === itemId);
			console.log({ category, item });
			if (item !== undefined) return true;
			else return false;
		});
		return cat?.title || "";
	};

	const getMenuCategories = () => {
		const categories: { [index: string]: Array<MenuItem> } = {};
		menus.forEach((menu) => {
			menu.menu_items.forEach((item) => {
				const category = getItemCategory(item.id);
				if (!categories[category]) categories[category] = [];
				categories[category].push(item);
			});
			menu.categories = categories;
		});
	};

	const [activeMenu, setActiveMenu] = React.useState(0);

	React.useEffect(() => {
		getMenuCategories();
	}, []);

	console.log(getMenuCategories());

	return (
		<div
			id="menu"
			className="FoodMenu"
			style={{
				backgroundImage: `url(${getImageUrl(
					getBestImage(section.preview[0])
				)})`,
			}}
		>
			<div className="FoodMenuHeader">
				<h1>{section.title}</h1>
			</div>

			<div className="FoodMenuContainer">
				<div className="FoodMenuNavbar">
					{menus.map((menu, i) => (
						<ButtonLink
							key={i}
							selected={activeMenu === i ? true : false}
							title={menu.title}
							onClick={() => {
								setActiveMenu(i);
							}}
							large={true}
						></ButtonLink>
					))}
				</div>
				<FoodMenuCard menu={menus[activeMenu]} />
			</div>
		</div>
	);
};

export { FoodMenu };
