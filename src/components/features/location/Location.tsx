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
			<h1>Find Us</h1>
			<div className="LocationContainer">
				{typeof window !== "undefined" ? (
					<MapContainer
						center={[51.505, -0.09]}
						zoom={13}
						scrollWheelZoom={true}
						id="map"
						style={{
							height: "50vh",
							width: "50vw",
							zIndex: 100,
						}}
					>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={[51.505, -0.09]}>
							<Popup>Your restaurant here!</Popup>
						</Marker>
					</MapContainer>
				) : null}
				<div className="LocationInformation">
					<h3>Come dine with us!</h3>
					<address>
						Located at:
						<a
							href="https://www.google.com/maps/search/?api=1&query=mcdonalds"
							className="address-container"
						>
							123 Happy St <br />
							City, ST 12345
							<br /> USA
						</a>
						Call us:
						<span className="address-container">+1 (123) 555-1234</span>
					</address>

					<br />
					<br />
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
				</div>
			</div>
		</div>
	);
};

export { Location };
