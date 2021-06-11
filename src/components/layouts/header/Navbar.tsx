import React, { useEffect, useRef, useState } from "react";

interface NavbarProps {
	links: Array<{
		title: string;
		link?: string; // '/route'
		elemId?: string;
	}>;
	isMobile?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ links, isMobile }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		setIsOpen(false);

		//@ts-ignore
		const href: string = e.target.href;

		const elemId: string | false = href.includes("#")
			? href.split("#")[1]
			: false;
		if (elemId) {
			document.getElementById(elemId)?.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<>
			{isMobile ? (
				<div>
					<ul className={`navbar ${isOpen ? "open" : "hidden"}`}>
						{links.map((link, index) => (
							<li key={index}>
								<a
									onClick={handleClick}
									key={index}
									href={link.link ? link.link : `#${link.elemId}`}
								>
									{link.title}
								</a>
							</li>
						))}
					</ul>
					<div
						onClick={() => {
							setIsOpen(false);
						}}
						className={`NavbarOpenContainer ${!isOpen ? "hidden" : ""}`}
					></div>
					<div
						onClick={() => {
							setIsOpen(true);
						}}
						className="mobile-navbar-icon"
					>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			) : (
				<ul className={`navbar`}>
					{links.map((link, index) => (
						<li key={index}>
							<a
								onClick={handleClick}
								key={index}
								href={link.link ? link.link : `#${link.elemId}`}
							>
								{link.title}
							</a>
						</li>
					))}
				</ul>
			)}
		</>
	);
};
