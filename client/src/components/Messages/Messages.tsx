import React from "react";
// @ts-ignore
import ScrollToBottom from "react-scroll-to-bottom";
import MessageItem from "../Message/Message";
import "./Messages.css";

const Message: React.FC<MessagesData> = ({ messages, name }) => (
	<ScrollToBottom className='messages'>
		{messages.map((message, index) => (
			<div key={index}>
				<MessageItem message={message} name={name} />
			</div>
		))}
	</ScrollToBottom>
);

export default Message;
