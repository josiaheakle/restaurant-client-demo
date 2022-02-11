import * as React from "react";

import { FoodMenuItem } from "./FoodMenuItem";

import "./FoodMenu.css";
import { CategoryMenu } from "../../../types/QueryTypes";

interface FoodMenuCardProps {
	menu: CategoryMenu;
}

const FoodMenuCard: React.FC<FoodMenuCardProps> = ({ menu }) => {
	const orderedCategories = menu.categories
		? Object.keys(menu.categories).sort((a, b) => {
				return menu.categories[a].menu_order - menu.categories[b].menu_order;
		  })
		: [];

	return (
		<div className="FoodMenuCard">
			<span className="FoodMenuCardHeaderContainer">
				<div className="nav-placeholder"></div>
				<div className="FoodMenuCardHeader">
					<h3>{menu.title}</h3>
					<p>{menu.description}</p>
				</div>
			</span>

			{orderedCategories.map((key, index) => {
				const items = menu.menu_items.map((item, i) => {
					return (
						<>
							<FoodMenuItem key={i} menuItem={item}></FoodMenuItem>
							<br />
						</>
					);
				});
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
