import * as React from "react";
import { getImageUrl } from "../../../util/getImageUrl";

interface MenuItemPageProps {
	pageContext: any;
	// id:string;
	// image:string;
	// descr:string;
	// title:string;
}

const MenuItemPage: React.FC<MenuItemPageProps> = ({ pageContext }) => {
	console.log(pageContext);
	const { id, image, descr, title } = pageContext;
	return (
		<>
			<h1>{title}</h1>
			<p>{descr}</p>
			<img src={getImageUrl(image)}></img>
		</>
	);
};

export default MenuItemPage;
