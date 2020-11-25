import React from "react";
import "./InfoBar.css";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

type RoomProps = {
	room: string | string[] | null;
};

const InfoBar: React.FC<RoomProps> = ({ room }) => {
	return (
		<div className='infoBar'>
			<div className='leftInnerContainer'>
				<GoPrimitiveDot style={{ fill: "green", marginRight: "5%" }} />
				<h3>{room}</h3>
			</div>
			<div className='rightInnerContainer'>
				<a href='/'>
					<AiFillCloseCircle style={{ fill: "red", color: "white" }} />
				</a>
			</div>
		</div>
	);
};

export default InfoBar;
