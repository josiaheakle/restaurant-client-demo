import * as React from "react";

import "./Footer.css";

// @ts-ignore
import twIcon from "../../../assets/twitter-icon.png";
// @ts-ignore
import myIcon from "../../../assets/logo512.png";
// @ts-ignore
import ghIcon from "../../../assets/github.svg";
// @ts-ignore
import liIcon from "../../../assets/linkedInIcon.png";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<div className="Footer align-center">
			<a className="my-link" href="https://josiaheakle.com">
				<img className="my-icon" src={myIcon}></img>
			</a>

			<span>
				Designed, developed, and deployed by{" "}
				<a className="my-link-text" href="https://josiaheakle.com">
					Josiah Eakle
				</a>
				.
			</span>
			<span className="my-link-container">
				<a className="my-link" href="https://github.com/josiaheakle">
					<img className="link-icon" src={ghIcon}></img>
				</a>
				<a
					className="my-link"
					href="https://www.linkedin.com/in/josiah-eakle-10a7a6204/"
				>
					<img className="link-icon" src={liIcon}></img>
				</a>
				<a
					className="my-link"
					href="https://twitter.com/JosiahEakle"
					title="Twitter"
				>
					<img className="link-icon" src={twIcon} alt="Twitter Icon"></img>
				</a>
			</span>
			<span className="attribute">
				<div>
					UI icons by{" "}
					<a href="https://www.flaticon.com/uicons" title="Flaticon">
						Flaticon
					</a>
					, Images by{" "}
					<a href="https://www.pexels.com/" title="Pexels">
						Pexels
					</a>{" "}
					from Rachel Claire, Volkan Vardar, Kasumi Loffler, Quark Studio, and
					Ella Olsson.
				</div>
			</span>
		</div>
	);
};

export { Footer };
