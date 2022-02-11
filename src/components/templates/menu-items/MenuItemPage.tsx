import * as React from "react";
import { ImageHandler } from "../../../util/getImageUrl";

interface MenuItemPageProps {
	pageContext: any;
}

const MenuItemPage: React.FC<MenuItemPageProps> = ({ pageContext }) => {
	const { id, image, descr, title } = pageContext;
	return (
		<>
			<h1>{title}</h1>
			<p>{descr}</p>
			<img src={ImageHandler.getImageUrl(image)}></img>
		</>
	);
};

export default MenuItemPage;
