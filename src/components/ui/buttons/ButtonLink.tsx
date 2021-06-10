import React from "react";
import { Link } from "gatsby";

import "./ButtonLink.css";

interface ButtonProps {
	title: string;
	link?: string;
	large?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
		<button
			className={`ButtonLink ${large ? "large" : ""} ${
				selected ? "selected" : ""
			}`}
			onClick={onClick}
		>
			{title}
		</button>
	) : null;
};
