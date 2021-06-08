import React from "react";
import { Navbar } from "./Navbar";

import "./Header.css";

interface HeaderProps {
	title?: string;
	subtitle?: string;
	icon?: {
		src: string;
		alt: string;
	};
	pages?: Array<{
		title: string;
		link?: string;
		elemId?: string;
	}>;
}

export const Header: React.FC<HeaderProps> = ({
	pages,
	title,
	subtitle,
	icon,
}) => {
	console.log({ pages, title, subtitle, icon });
	const [isSmall, setIsSmall] = React.useState(true);

	const checkScroll = () => {
		if (window.scrollY > 100) {
			setIsSmall(true);
		} else setIsSmall(false);
	};
	const handleScroll = () => {
		window.addEventListener("scroll", () => {
			checkScroll();
		});
	};

	React.useEffect(() => {
		checkScroll();
		handleScroll();
	}, []);

	return (
		<header className={`header ${!isSmall ? "large" : ""}`}>
			<a className="header-container" href="/">
				{icon ? (
					<img className="header-icon" src={icon.src} alt={icon.alt}></img>
				) : null}
				{title ? (
					<span className="header-text-container">
						<h3 style={{ height: "fit-content" }}>{title}</h3>
						{subtitle ? (
							<h5 className={`${isSmall ? "small" : ""}`}>{subtitle}</h5>
						) : null}
					</span>
				) : null}
			</a>
			{pages ? (
				<nav>
					<Navbar links={pages} />
				</nav>
			) : null}
		</header>
	);
};
