import React from "react";
import "./Input.css";

const Input: React.FC<MessageProps> = ({
	message,
	setMessage,
	sendMessage,
}) => (
	<form className='form'>
		<input
			className='input'
			placeholder='Type your message here...'
			value={message}
			type='text'
			onChange={event => setMessage(event.currentTarget.value)}
			onKeyPress={event => (event.key === "Enter" ? sendMessage(event) : null)}
		/>
		<button className='sendButton' onClick={event => sendMessage(event)}>
			Send
		</button>
	</form>
);

export default Input;
