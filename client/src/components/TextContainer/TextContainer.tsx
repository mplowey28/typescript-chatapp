import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import "./TextContainer.css";

const TextContainer = ({ users }: any) => (
	<div className='textContainer'>
		<div>
			<h1>
				Realtime Chat Application{" "}
				<span role='img' aria-label='emoji'>
					💬
				</span>
			</h1>
			<h2>
				Created with React, Express, Node and Socket.IO{" "}
				<span role='img' aria-label='emoji'>
					❤️
				</span>
			</h2>
			<h2>
				Try it out right now!{" "}
				<span role='img' aria-label='emoji'>
					⬅️
				</span>
			</h2>
		</div>
		{users ? (
			<div>
				<h1>People currently chatting:</h1>
				<div className='activeContainer'>
					<h2>
						{users.map(({ name }: any) => (
							<div key={name} className='activeItem'>
								{name}
								<GoPrimitiveDot style={{ fill: "green", marginRight: "5%" }} />
							</div>
						))}
					</h2>
				</div>
			</div>
		) : null}
	</div>
);

export default TextContainer;
