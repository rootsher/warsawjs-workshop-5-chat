class Client {
    constructor(socket) {
        this._socket = socket;
        this._account = null;
    }

    createAccount(identifier, password) {
        this._account = {
            identifier,
            password
        };
    }

    get socket() {
        return this._socket;
    }
}

module.exports = Client;
