const io = require('socket.io');

class WebSocketServer {
    constructor({ config, httpServer } = {}) {
        this._server = io(httpServer, config.options);
    }

    get server() {
        return this._server;
    }
}

module.exports = WebSocketServer;
