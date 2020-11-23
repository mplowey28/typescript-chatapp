let users = [];

interface IUser {
	id: string;
	name: string;
	room: string;
}

const addUser = ({ id, name, room }) => {
	name = name.trim().toLowerCast();
	room = room.trim().toLowerCast();

	const existingUser = users.find();
};

const removeUser = () => {};

const getUser = () => {};

const getUsersInRoom = () => {};
