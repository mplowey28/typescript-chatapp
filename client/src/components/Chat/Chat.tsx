import React, { useState, useEffect, SyntheticEvent } from "react";
import queryString from "query-string";
import * as io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";
import "./Chat.css";

let socket: SocketIOClient.Socket;

const Chat: React.FC<ILocation> = ({ location }) => {
	const [name, setName] = useState<any>("");
	const [room, setRoom] = useState<any>("");
	const [users, setUsers] = useState<any>("");
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
		};
	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on("message", (message: { user: string; text: string }) => {
			setMessages([...messages, message]);
		});

		socket.on("roomData", ({ users: [] }) => {
			setUsers(users);
		});
	}, []);

	const sendMessage = (event: SyntheticEvent) => {
		event.preventDefault();
		socket.emit("sendMessage", message, () => setMessage(""));
	};

	return (
		<div className='outerContainer'>
			<div className='container'>
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</div>
			<TextContainer users={users} />
		</div>
	);
};

export default Chat;
