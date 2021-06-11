import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

import { ButtonLink } from "../../ui/buttons/ButtonLink";
import { FoodMenuItem } from "./FoodMenuItem";

import "./FoodMenu.css";
import { Menu, CategoryMenu } from "../../../types/QueryTypes";

interface FoodMenuCardProps {
	menu: CategoryMenu;
}

const FoodMenuCard: React.FC<FoodMenuCardProps> = ({ menu }) => {
	console.log({ menu });
	return (
		<div className="FoodMenuCard">
			<span className="FoodMenuCardHeaderContainer">
				<div className="nav-placeholder"></div>
				<div className="FoodMenuCardHeader">
					<h3>{menu.title}</h3>
					<p>{menu.description}</p>
				</div>
			</span>

			{Object.keys(menu.categories).map((key, index) => {
				const items = Object.values(
					menu.menu_items.map((item, i) => {
						return <FoodMenuItem key={i} menuItem={item}></FoodMenuItem>;
					})
				);
				return (
					<div key={index} className="MenuCategory">
						<h4 key={index}>{key}</h4>
						{items}
					</div>
				);
			})}

			{/* {menu.menu_items.map((item, index) => {
				return <FoodMenuItem key={index} menuItem={item}></FoodMenuItem>;
			})} */}
		</div>
	);
};

export { FoodMenuCard };
