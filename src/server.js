const config = require('./config');

const HTTPServer = require('./chat/servers/HTTPServer');
const WebSocketServer = require('./chat/servers/WebSocketServer');
const ChatServer = require('./chat/servers/ChatServer');

(async () => {
    const httpServer = new HTTPServer({
        config: config.http
    });

    await httpServer.run();

    const webSocketServer = new WebSocketServer({
        config: config.websocket,
        httpServer: httpServer.server
    });

    const chatServer = new ChatServer({
        config: config.chat,
        webSocketServer
    });

    chatServer.run();

})();
