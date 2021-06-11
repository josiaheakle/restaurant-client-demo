import * as React from "react";
import { ButtonLink } from "../../ui/buttons/ButtonLink";

interface FeaturedItemProps {
	slug: string;
	imgSrc: string;
	title: string;
	descr: string;
	link?: string;
	isSliding?: boolean;
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({
	imgSrc,
	title,
	descr,
	slug,
	link,
	isSliding,
}) => {
	return (
		<div
			id="home"
			className="featuredItem"
			style={{ backgroundImage: `url(${imgSrc})` }}
		>
			<div className={`featuredItemInfo ${isSliding ? "hidden" : ""}`}>
				<div>
					<h3>{title}</h3>
					<p>{descr}</p>
					<span>
						<ButtonLink
							link={link ? link : ``}
							title={"read more"}
						></ButtonLink>
						<ButtonLink
							onClick={() => {
								document
									.getElementById("location")
									?.scrollIntoView({ behavior: "smooth" });
							}}
							title={"contact me"}
						></ButtonLink>
					</span>
				</div>
			</div>
		</div>
	);
};

export { FeaturedItem };
