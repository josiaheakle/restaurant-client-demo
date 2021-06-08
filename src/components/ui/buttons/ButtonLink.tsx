import React from "react";
import { Link } from "gatsby";

import "./ButtonLink.css";

interface ButtonProps {
	title: string;
	link?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	selected?: boolean;
}

export const ButtonLink: React.FC<ButtonProps> = ({
	title,
	link,
	onClick,
	selected,
}) => {
	return link ? (
		<Link className={`ButtonLink ${selected ? "selected" : ""}`} to={link}>
			{title}
		</Link>
	) : onClick ? (
		<button
			className={`ButtonLink ${selected ? "selected" : ""}`}
			onClick={onClick}
		>
			{title}
		</button>
	) : null;
};
