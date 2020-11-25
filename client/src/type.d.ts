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
