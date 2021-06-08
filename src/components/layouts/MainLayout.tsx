import React from "react";
import { Helmet } from "react-helmet";

import { Header } from "./header/Header";

interface MainLayoutProps {
	title: string;
	subtitle: string;
	icon?: {
		src: string;
		alt: string;
	};
	pages: Array<{
		title: string;
		link?: string;
		elemId?: string;
	}>;
	brandIcon?: {
		src: string;
		alt: string;
	};
}

export const MainLayout: React.FC<MainLayoutProps> = ({
	title,
	subtitle,
	pages,
	brandIcon,
	children,
}) => {
	console.log({ title, subtitle });
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Restaurant website designed, developed and deployed by Josiah Eakle."
				/>
			</Helmet>
			{brandIcon ? (
				<Header
					icon={brandIcon}
					title={title}
					subtitle={subtitle}
					pages={pages}
				/>
			) : (
				<Header title={title} subtitle={subtitle} pages={pages} />
			)}
			{children}
		</>
	);
};
