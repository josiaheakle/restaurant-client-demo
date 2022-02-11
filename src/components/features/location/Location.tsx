import * as React from "react";
import { Contact } from "./Contact";

import "./Location.css";

// @ts-ignore
import twIcon from "../../../assets/twitter-icon.png";
// @ts-ignore
import myIcon from "../../../assets/logo512.png";
// @ts-ignore
import ghIcon from "../../../assets/github.svg";
// @ts-ignore
import liIcon from "../../../assets/linkedInIcon.png";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useIsMobile } from "../../../util/hooks";

interface LocationProps {}

/**
 * 					<form className="contact-form">
						{isMobile ? (
							<>
								<label htmlFor="name-input">Name</label>
								<input id="name-input" type="text"></input>
													 <label htmlFor="email-input">Email</label>
													 <input id="email-input" type="text"></input>
												 </>
											 ) : (
												 <span className="horizontal">
													 <span>
														 <label htmlFor="name-input">Name</label>
														 <input id="name-input" type="text"></input>
													 </span>
					 
													 <span>
														 <label htmlFor="email-input">Email</label>
														 <input id="email-input" type="text"></input>
													 </span>
												 </span>
											 )}
					 
											 <label htmlFor="message-input">How can I help?</label>
											 <textarea id="message-input"></textarea>
										 </form>
					 
 */

const Location: React.FC<LocationProps> = ({}) => {
	const isMobile = useIsMobile();
	return (
		<div id="location" className="Location">
			<h2>Get Noticed</h2>
			<div className="LocationContainer">
				{typeof window !== "undefined" ? (
					<MapContainer
						center={[35.960636, -83.920738]}
						zoom={13}
						scrollWheelZoom={true}
						id="map"
						className="LocationMap"
					>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={[35.960636, -83.920738]}>
							<Popup>Your restaurant here!</Popup>
						</Marker>
					</MapContainer>
				) : null}
				<div className="LocationInformationContainer">
					<div className="LocationInformation">
						<h4>Ready to establish your online presence?</h4>
						{/* <h6>I would love to help!</h5> */}I would love to help! With
						over a year developing web applications, I am excited to design,
						develop and deploy the{" "}
						<strong>perfect custom website for your restaurant</strong>.
					</div>
					<Contact />
				</div>
			</div>
		</div>
	);
};

export { Location };
