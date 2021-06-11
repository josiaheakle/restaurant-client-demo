import React from "react";
import { Link } from "gatsby";

import "./ButtonLink.css";

interface ButtonProps {
	title: string;
	link?: string;
	large?: boolean;
	onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
	selected?: boolean;
}

export const ButtonLink: React.FC<ButtonProps> = ({
	title,
	large,
	link,
	onClick,
	selected,
}) => {
	return link ? (
		<Link
			className={`ButtonLink ${large ? "large" : ""} ${
				selected ? "selected" : ""
			}`}
			to={link}
		>
			{title}
		</Link>
	) : onClick ? (
		<a
			className={`ButtonLink ${large ? "large" : ""} ${
				selected ? "selected" : ""
			}`}
			onClick={onClick}
		>
			{title}
		</a>
	) : null;
};
