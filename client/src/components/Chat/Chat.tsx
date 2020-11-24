import React, { useState, useEffect, SyntheticEvent } from "react";
import queryString from "query-string";
import * as io from "socket.io-client";

let socket: SocketIOClient.Socket;

const Chat: React.FC<ILocation> = ({ location }) => {
	const [name, setName] = useState<string | string[] | null>("");
	const [room, setRoom] = useState<string | string[] | null>("");
	const [message, setMessage] = useState<any>("");
	const [messages, setMessages] = useState<IMessages>([]);
	const ENDPOINT = `localhost:5000`;

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		socket = io.connect(ENDPOINT);

		setName(name);
		setRoom(room);

		socket.emit("join", { name, room }, () => {});
		return () => {
			socket.emit("disconnect");

			//socket.off();
		};
	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on("message", (message: { user: string; text: string }) => {
			setMessages([...messages, message]);
		});
	}, [messages]);

	const sendMessage = (event: SyntheticEvent) => {
		event.preventDefault();
		socket.emit("sendMessage", message, () => setMessage(""));
	};

	return (
		<div className='outerContainer'>
			<div className='container'>
				<input
					value={message}
					type='text'
					onChange={event => setMessage(event.currentTarget.value)}
					onKeyPress={event =>
						event.key === "Enter" ? sendMessage(event) : null
					}
				/>
			</div>
		</div>
	);
};

export default Chat;
