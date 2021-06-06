import React from 'react';

import { ButtonLink } from "./ButtonLink";
// @ts-ignore
import { buttonLinkContainer } from "./ButtonLink.module.css";

interface ButtonLinkContainerProps {
	links: Array<
		{
			link: string;
			title: string;
		}
	>;
}

export const ButtonLinkContainer: React.FC<ButtonLinkContainerProps> = ({links}) => {
	return (
		<div className={buttonLinkContainer}>
			{links.map((l, i) => {
				return (
					<ButtonLink key={i} link={l.link} title={l.title}/>
				);
			})}
		</div>
	);
}