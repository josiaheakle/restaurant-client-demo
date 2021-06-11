import * as React from "react";
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

// import * as L from "leaflet";
// import "leaflet/dist/leaflet.css";

interface LocationProps {}

const Location: React.FC<LocationProps> = ({}) => {
	// const initMap = () => {
	// 	const map = L.map("map").setView([51.505, -0.09], 13);
	// 	L.tileLayer(
	// 		"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
	// 		{
	// 			attribution:
	// 				'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	// 			maxZoom: 18,
	// 			id: "mapbox/streets-v11",
	// 			tileSize: 512,
	// 			zoomOffset: -1,
	// 			accessToken: `${process.env.GATSBY_MAP_KEY}`,
	// 		}
	// 	).addTo(map);
	// };

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
						style={{
							height: "50vh",
							width: "50vw",
							zIndex: 1,
						}}
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
				<div className="LocationInformation">
					<h4>Ready to establish an online presence?</h4>
					<h5>I would love to help!</h5>
					With over a year of experience developing web applications, I am
					excited to design, develop and deploy the perfect custom website for
					your restaurant.
					<br />
					<div>
						<address>
							123 Your Address St <br />
							City, ST 12345
							<br /> USA
							<br />
							<br />
							<a
								href="mailto:dev@josiaheakle.com"
								className="address-container"
							>
								Send me an Email
							</a>
							<br />
							or
						</address>
						<span className="my-link-container address">
							<a className="my-link" href="https://josiaheakle.com">
								<img
									title="My Personal Website"
									className="link-icon"
									src={myIcon}
								></img>
							</a>
							<a className="my-link" href="https://github.com/josiaheakle">
								<img title="My Code" className="link-icon" src={ghIcon}></img>
							</a>

							<a
								className="my-link"
								href="https://twitter.com/JosiahEakle"
								title="Twitter"
							>
								<img
									className="link-icon"
									src={twIcon}
									alt="Twitter Icon"
								></img>
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Location };
