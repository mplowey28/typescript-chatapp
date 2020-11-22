import * as express from "express";
import ioserver, { Socket } from "socket.io";
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = ioserver(server);

io.on("connection", (socket: Socket) => {
	console.log("There is a new connection");

	socket.on("join", ({ name, room }, callback) => {});

	socket.on("disconnect", () => {
		console.log("user has left");
	});
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
