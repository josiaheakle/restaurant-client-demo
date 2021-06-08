// react, gatsby
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

// components
import { FoodMenuCard } from "./FoodMenuCard";
import { ButtonLink } from "../../ui/buttons/ButtonLink";

// util
import { getImageUrl, getBestImage } from "../../../util/getImageUrl";

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
						}
						large {
							size
							url
						}
						small {
							url
							size
						}
						thumbnail {
							size
							url
						}
					}
					url
					alternativeText
					size
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
							}
							small {
								url
								size
							}
							medium {
								url
								size
							}
							large {
								url
								size
							}
						}
						url
						size
						alternativeText
					}
					description
					title
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
						}
						small {
							url
							size
						}
						medium {
							url
							size
						}
						large {
							url
							size
						}
					}
					url
					size
					alternativeText
				}
				title
				subtitle
				description
			}
		}
	}
`;

import { Menu, Section } from "../../../types/QueryTypes";

const FoodMenu: React.FC<FoodMenuProps> = ({}) => {
	const data = useStaticQuery(query);
	const menus: Array<Menu> = data.allStrapiMenu.nodes;
	const section: Section = data.allStrapiSection.nodes[0];

	const [activeMenu, setActiveMenu] = React.useState(0);

	return (
		<div
			id="menu"
			className="FoodMenu"
			style={{
				backgroundImage: `url(${getImageUrl(getBestImage(section.preview))})`,
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
						></ButtonLink>
					))}
				</div>
				<FoodMenuCard menu={menus[activeMenu]} />
			</div>
		</div>
	);
};

export { FoodMenu };
