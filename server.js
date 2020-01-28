const express = require('express')
const app = express();
const server = app.listen(8000, () => 
    console.log("The Server is all fired up at port 8000")
);

const io = require("socket.io")(server);

// io.on("connection", socket => {
//     console.log(socket.id);
// });

io.on("connection", socket => {
//     console.log("Nice to meet you. (shake hand)"),
//     console.log(socket.id);
//     socket.on("event_from_client", data => {
//         socket.broadcoast.emit("send_data_to_all_other_clients", data);
//     });
// });

// io.on("newMessage", msg => {
    socket.on("message_from_client", newMessage => {
        console.log(newMessage);
        io.emit("send_new_message_to_all", newMessage);
    });
});