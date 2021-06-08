import * as React from "react";
import { MenuItem } from "../../../types/QueryTypes";
import { getImageUrl, getBestImage } from "../../../util/getImageUrl";

interface FoodMenuItemProps {
	menuItem: MenuItem;
}

const FoodMenuItem: React.FC<FoodMenuItemProps> = ({ menuItem }) => {
	console.log(menuItem);
	return (
		<div className="FoodMenuItem">
			<img
				src={getImageUrl(getBestImage(menuItem.preview))}
				alt={menuItem.preview.alternativeText}
			/>
			<h1>{menuItem.title}</h1>
		</div>
	);
};

export { FoodMenuItem };
