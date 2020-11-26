type Room = string | string[] | null;
type Name = string | string[] | null;

interface ILocation {
	location: { search: string };
}

interface IMessageObject {
	user: string;
	text: string;
}

interface IMessages extends Array<IMessageObject> {}

interface IUsersObject {
	id: string;
	name: string;
	room: string;
}

interface IUsers extends Array<IUsersObject> {}

type MessageProps = {
	message: any;
	setMessage(arg: string): void;
	sendMessage(arg: SyntheticEvent): void;
};

interface MessagesData {
	name: Name;
	messages: IMessages;
}

interface MessageData {
	message: { user: string; text: string };
	name: string;
}
