import React from "react";

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
	return (
		<a
			className={`ButtonLink ${large ? "large" : ""} ${
				selected ? "selected" : ""
			}`}
			href={link}
			onClick={onClick}
		>
			{title}
		</a>
	);
};
