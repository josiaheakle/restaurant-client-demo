import React from "react";
import { Navbar } from "./Navbar";

import "./Header.css";
import { useIsMobile, useWindowSize } from "../../../util/hooks";

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
	const [isOpen, setIsOpen] = React.useState(false);
	const isMobile = useIsMobile();

	const checkScroll = () => {
		if (window.scrollY > 100) {
			setIsSmall(true);
		} else setIsSmall(false);
	};

	React.useEffect(() => {
		checkScroll();
	}, []);

	React.useLayoutEffect(() => {
		window.addEventListener("scroll", checkScroll);
		return () => window.removeEventListener("scroll", checkScroll);
	}, []);

	return (
		<header
			className={`header ${!isSmall ? "large" : ""} ${
				isOpen ? "mobile-open" : ""
			}`}
		>
			<a className="header-container" href="/">
				{icon ? (
					<img className="header-icon" src={icon.src} alt={icon.alt}></img>
				) : null}
				{title ? (
					<span className="header-text-container">
						<h1
							style={{
								height: "fit-content",
								fontSize: "clamp(1.5rem, 2.369rem, 2.5vw)",
								margin: 0,
							}}
						>
							{title}
						</h1>
						{subtitle ? (
							<h5 className={`${isSmall ? "small" : ""}`}>{subtitle}</h5>
						) : null}
					</span>
				) : null}
			</a>
			{pages ? (
				<nav>
					<Navbar setOpen={setIsOpen} isMobile={isMobile} links={pages} />
				</nav>
			) : null}
		</header>
	);
};
