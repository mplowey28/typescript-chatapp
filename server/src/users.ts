import { IUser } from "./types";
let users: string[] = [];

const addUser = ({ id, name, room }: IUser) => {
	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();

	const existingUser = users.find();
};

const removeUser = () => {};

const getUser = () => {};

const getUsersInRoom = () => {};
