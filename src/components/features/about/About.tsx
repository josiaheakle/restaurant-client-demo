import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import { getImageUrl } from "../../../util/getImageUrl";

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
	return (
    <StaticQuery query={sectionQuery} render={(data)=>{
        const info : { preview: {alternativeText:string;url:string;width:number;height:number;}; title:string; subtitle:string; description:string;} = (data.allStrapiSection.nodes[0]);
        console.log(data);
        return(
        <div className="aboutContainer" id="about">
			<div
				className="split left"
				style={{
                    // backgroundImage: `url(${getImageUrl(info.preview.url)})`
				}}
                >

                    <img src={getImageUrl(info.preview.url)} alt={info.preview.alternativeText} />
                </div>
			<div className="split right aboutInformation">
				<h5>{info.subtitle}</h5>
				<h3>{info.title}</h3>
				<p>{info.description}</p>
			</div>
		</div>
    )}}/>
	);
};

export { About };
