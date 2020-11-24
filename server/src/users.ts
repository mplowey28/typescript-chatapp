import { IUserObject, IUsers } from "./types";
let users: IUsers

const addUser = ({ id, name, room }: IUserObject) => {
	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();

	const existingUser = users.find(user => user.room === room  users.name === name);

	if (existingUser) {
		return { error: 'Username is taken' }
	}

	const user = { id, name, room }
	users.push(user)
	return { user }
};

const removeUser = (id: string) => {
	const index = users.findIndex(user => user.id === id)
	if(index !== -1) {
		return users.splice(index, 1)[0]
	}
};

const getUser = (id: string) => users.find(user => user.id === id)

const getUsersInRoom = (room: string) => users.filter(user => user.room === room);
