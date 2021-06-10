import * as React from "react";
import { MenuItem } from "../../../types/QueryTypes";
import { ImageHandler } from "../../../util/getImageUrl";

interface FoodMenuItemProps {
	menuItem: MenuItem;
}

const FoodMenuItem: React.FC<FoodMenuItemProps> = ({ menuItem }) => {
	console.log(ImageHandler.getBestImageUrl(menuItem.preview));
	return (
		/**
		 * 			<img
				src={getImageUrl(getBestImage(menuItem.preview))}
				alt={menuItem.preview.alternativeText}
			/>
		 */
		<div className="FoodMenuItem">
			<div
				className="FoodMenuImage"
				style={{
					backgroundImage: `url(${ImageHandler.getThumbnail(
						menuItem.preview
					)})`,
				}}
			></div>
			<div className="MenuItemTitle">
				<span className="MenuItemTitleTop">
					<h5>{menuItem.title}</h5>{" "}
					<p>{menuItem.price ? `$${menuItem.price}` : ""}</p>
				</span>
				<p>{menuItem.description}</p>
			</div>
		</div>
	);
};

export { FoodMenuItem };
