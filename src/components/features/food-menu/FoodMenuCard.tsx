import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

import { ButtonLink } from "../../ui/buttons/ButtonLink";
import { FoodMenuItem } from "./FoodMenuItem";

import "./FoodMenu.css";
import { Menu } from "../../../types/QueryTypes";

interface FoodMenuCardProps {
	menu: Menu;
}

const FoodMenuCard: React.FC<FoodMenuCardProps> = ({ menu }) => {
	return (
		<div className="FoodMenuCard">
			<h3>{menu.title}</h3>

			<span>{menu.description}</span>
			{menu.menu_items.map((item, index) => {
				return <FoodMenuItem key={index} menuItem={item}></FoodMenuItem>;
			})}
		</div>
	);
};

export { FoodMenuCard };
