// react, gatsby
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

// components
import { FoodMenuCard } from "./FoodMenuCard";
import { ButtonLink } from "../../ui/buttons/ButtonLink";

// util
import { ImageHandler } from "../../../util/getImageUrl";

// types
import {
	CategoryMenu,
	Menu,
	MenuItem,
	Section,
} from "../../../types/QueryTypes";

// css
import "./FoodMenu.css";
import { useIsMobile } from "../../../util/hooks";

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
				menu_order
			}
		}
	}
`;

interface Category {
	menu_items: Array<{ id: number }>;
	title: string;
	menu_order: number;
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

	const getItemCategory = (
		itemId: number
	): {
		category: string;
		menu_order: number;
	} => {
		const cat = categories.find((category) => {
			const item = category.menu_items.find((item) => item.id === itemId);
			if (item !== undefined) return true;
			else return false;
		});
		return {
			category: cat?.title || "",
			menu_order: cat?.menu_order || -1,
		};
	};

	const getMenuCategories = () => {
		const categories: {
			[index: string]: {
				menu_order: number;
				menu_items: Array<MenuItem>;
			};
		} = {};
		menus.forEach((menu) => {
			menu.menu_items.forEach((item) => {
				const category = getItemCategory(item.id);
				if (!categories[category.category])
					categories[category.category] = {
						menu_items: [],
						menu_order: category.menu_order,
					};
				categories[category.category].menu_items.push(item);
			});
			menu.categories = categories;
		});
	};

	const [activeMenu, setActiveMenu] = React.useState(0);
	const isMobile = useIsMobile();

	React.useEffect(() => {
		getMenuCategories();
	}, []);

	return (
		<div
			id="menu"
			className="FoodMenu"
			style={{
				backgroundImage: `url(${ImageHandler.getBestImageUrl(
					section.preview[0]
				)})`,
			}}
		>
			{!isMobile ? (
				<div className="FoodMenuHeader">
					<h2>{section.title}</h2>
				</div>
			) : null}

			<div className="FoodMenuContainer">
				{isMobile ? <h2>{section.title}</h2> : null}
				<div className="FoodMenuNavbar">
					{menus.map((menu, i) => (
						<button
							key={i}
							className={`FoodMenuTab ribbon ${
								activeMenu === i ? "selected" : ""
							}`}
							onClick={() => setActiveMenu(i)}
						>
							{menu.title}
						</button>
					))}
				</div>
				<FoodMenuCard menu={menus[activeMenu]} />
			</div>
		</div>
	);
};

export { FoodMenu };
