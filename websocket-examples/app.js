const WebSockets = new require("ws");

const websocketsServer = new WebSockets.Server({port: 5000});

websocketsServer.on("connection", (server)=> {
    // console.log(server);
    console.log("Connect!");
    server.send(`Соединение установлено!`);
    server.send(`Соединение установлено!`);
})