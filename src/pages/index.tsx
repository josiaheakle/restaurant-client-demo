// react & gatsby
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

//@ts-ignore
import brandIcon from "../assets/chefs-hat.png";

// components
import { MainLayout } from "../components/layouts/MainLayout";

import { FeaturedItemGallery } from "../components/features/featured-items/FeaturedItemGallery";
import { About } from "../components/features/about/About";
import { Location } from "../components/features/location/Location";
import { FoodMenu } from "../components/features/food-menu/FoodMenu";

// css
import "../components/root.css";

const pages = [
	{
		title: "Home",
		elemId: "home",
	},
	{
		title: "About",
		elemId: "about",
	},
	{
		title: "Menu",
		elemId: "menu",
	},
	{
		title: "Find Us",
		elemId: "location",
	},
];

const IndexPage: React.FunctionComponent = () => {
	return (
		// <Background backgroundImg={bgImg}>
		<MainLayout
			pages={pages}
			title="Bob's Bistreaux"
			subtitle="on the beach with the burgers"
			brandIcon={{ src: brandIcon, alt: "" }}
		>
			{/* home -> featured item images */}
			<FeaturedItemGallery></FeaturedItemGallery>

			{/* menu -> links to each menu */}

			{/* about ->  */}
			<About></About>

			<FoodMenu></FoodMenu>

			<Location></Location>

			{/* location -> google map */}
		</MainLayout>
		// </Background>
	);
};

export default IndexPage;

export { pages };
