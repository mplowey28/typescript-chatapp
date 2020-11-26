import React from "react";
// @ts-ignore
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";
import "./Messages.css";

const Message: React.FC<IMessages> = ({ messages, name }) => (
	<ScrollToBottom className='messages'>
		{messages.map((message, index) => (
			<div key={index}>
				<Message message={message} name={name} />
			</div>
		))}
	</ScrollToBottom>
);

export default Message;
