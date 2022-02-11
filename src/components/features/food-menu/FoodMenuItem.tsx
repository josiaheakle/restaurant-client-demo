import * as React from "react";
import { MenuItem } from "../../../types/QueryTypes";

interface FoodMenuItemProps {
	menuItem: MenuItem;
}

const FoodMenuItem: React.FC<FoodMenuItemProps> = ({ menuItem }) => {
	return (
		<div className="FoodMenuItem">
			{/* <div
				className="FoodMenuImage"
				style={{
					backgroundImage: `url(${ImageHandler.getThumbnail(
						menuItem.preview
					)})`,
				}}
			></div> */}
			<span className="MenuItemTitleTop">
				<strong>
					<span>{menuItem.title}</span>
				</strong>{" "}
				<p>{menuItem.price ? `$${menuItem.price}` : ""}</p>
			</span>
			<p>{menuItem.description}</p>
			{/* </div> */}
		</div>
	);
};

export { FoodMenuItem };
