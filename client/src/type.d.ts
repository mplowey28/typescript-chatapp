interface ILocation {
	location: { search: string };
}

interface IName {
	name: string | null;
}

interface IRoom {
	room: string;
}

interface IMessageObject {
	user: string;
	text: string;
}

interface IMessages extends Array<IMessageObject> {}
