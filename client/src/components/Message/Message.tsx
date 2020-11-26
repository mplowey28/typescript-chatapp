import React from "react";
// @ts-ignore
import ReactEmoji from "react-emoji";
import "./Message.css";

const Message: React.FC<MessageData> = ({ message: { user, text }, name }) => {
	let isSentByCurrentUser = false;

	const trimmedName = name ? name.trim().toLowerCase() : null;

	if (user === trimmedName) {
		isSentByCurrentUser = true;
	}

	return isSentByCurrentUser ? (
		<div className='messageContainer justifyEnd'>
			<p className='sentText pr-10'>{trimmedName}</p>
			<div className='messageBox backgroundBlue'>
				<p className='messageText colorWhite'>{ReactEmoji.emojify(text)}</p>
			</div>
		</div>
	) : (
		<div className='messageContainer JustifyStart'>
			<div className='messageBox backgroundLight'>
				<p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
			</div>
			<p className='sentText pl-10'>{user}</p>
		</div>
	);
};

export default Message;
