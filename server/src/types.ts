export interface IUserObject {
	id: string;
	name: string;
	room: string;
}

export interface IUsers extends Array<IUserObject> {}
