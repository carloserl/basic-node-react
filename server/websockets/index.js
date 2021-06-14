const socketio = require("socket.io");
var io;
const { setIo } = require("./connection");

function handler(socket) {
  console.log("new connection", socket.id);

  socket.on("hi:call", (data) => {
    console.log(data);
    io.emit("hi:response", "HOLA2");
  });

  socket.on("chat:message", (data) => {
    console.log(data);
    io.emit("message", data);
  });

  socket.on("chat:typing", function (data) {
    socket.broadcast.emit("chat:typing", data);
  });
}

module.exports = {
  start: (server) => {
    io = socketio.listen(server);
    io.on("connect", (socket) => {
      handler(socket);
    });
  },
};
