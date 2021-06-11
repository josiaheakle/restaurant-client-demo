import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import { Section } from "../../../types/QueryTypes";
import { ImageHandler } from "../../../util/getImageUrl";
import { useIsMobile } from "../../../util/hooks";

import "./About.css";

interface AboutProps {}

const sectionQuery = graphql`
	query {
		allStrapiSection(filter: { section: { eq: "about" } }) {
			nodes {
				preview {
					alternativeText
					url
					width
					height
				}
				title
				subtitle
				description
			}
		}
	}
`;

const About: React.FC<AboutProps> = ({}) => {
	const isMobile = useIsMobile();
	return (
		<StaticQuery
			query={sectionQuery}
			render={(data) => {
				const info: Section = data.allStrapiSection.nodes[0];
				console.log(data);
				return (
					<div className="aboutContainer" id="about">
						{isMobile ? (
							<>
								<div className="about-mobile">
									<div className="about-mobile-header">
										<img
											src={ImageHandler.getBestImageUrl(info.preview[0])}
											alt={info.preview[0].alternativeText}
										/>
										<span>
											<h5>introduce yourself</h5>
											<h3>Gain Control of Your Image</h3>
										</span>
									</div>
									<p>
										Establishing an online presence gives you control of first
										impressions. With more than 75% of diners visiting a
										restaurant's website before deciding, fostering a elegant
										first impression is key. Access to powerful content
										managment tools, you can easily manage your menu. Seach
										engine opimization will make your website one of the first
										results on Google.
									</p>
								</div>
							</>
						) : (
							<>
								<div
									className="about-split left"
									style={
										{
											// backgroundImage: `url(${getImageUrl(info.preview.url)})`
										}
									}
								>
									<img
										src={ImageHandler.getBestImageUrl(info.preview[0])}
										alt={info.preview[0].alternativeText}
									/>
								</div>
								<div className="about-split right aboutInformation">
									{/* <h5>{info.subtitle}</h5> */}
									<h5>introduce yourself</h5>
									<h3>Gain Control of Your Image</h3>
									<p>
										Establishing an online presence gives you control of first
										impressions. With more than 75% of diners visiting a
										restaurant's website before deciding, fostering a elegant
										first impression is key. Access to powerful content
										managment tools, you can easily manage your menu. Seach
										engine opimization will make your website one of the first
										results on Google.
									</p>
								</div>
							</>
						)}
					</div>
				);
			}}
		/>
	);
};

export { About };
