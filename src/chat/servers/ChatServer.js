const Client = require('../Client');

class ChatServer {
    constructor({ config, webSocketServer } = {}) {
        this._webSocketServer = webSocketServer.server;
        this._webSocketServer.on('connection', (socket) => this._registerClient(socket));

        this._clients = {};
    }

    run() {
        console.log('running...');
    }

    _registerClient(socket) {
        socket.join(ChatServer.DEFAULT_ROOM);

        console.log('join', socket.id);

        socket.on('command', (...args) => this._commandHandler(socket.id, ...args));
        socket.on('chat', (...args) => this._chatHandler(socket.id, ...args));
        socket.on('disconnect', (...args) => this._disconnectHandler(socket.id, ...args));

        this._clients[socket.id] = new Client(socket);
    }

    _chatHandler(id, message) {
        this._webSocketServer.sockets.emit('chat', message);
        console.log('chat!!:', message);

    }
    _commandHandler(id, ...args) {
        switch (args[0].name) {
            case 'login': this._loginHandler(id, ...args); break;
            case 'register': this._registerHandler(id, ...args); break;
            default: this._unrecognizedCommandHandler(id, ...args);
        }
    }
    _disconnectHandler() {}

    _loginHandler(id, { name }) {
        const client = this._clients[id];

        client.socket.emit('command', `Success: '/${name}'.`);
    }
    _registerHandler(id, { name }) {
        const client = this._clients[id];

        client.socket.emit('command', `Success: '/${name}'.`);
    }

    _unrecognizedCommandHandler(id, { name }) {
        const client = this._clients[id];

        client.socket.emit('command', `Unrecognized command: '/${name}'.`);
    }
}

ChatServer.SUPPORTED_COMMANDS = ['login', 'register', 'logout'];
ChatServer.DEFAULT_ROOM = 'general';

module.exports = ChatServer;
