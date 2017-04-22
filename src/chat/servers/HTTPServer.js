const http = require('http');

class HTTPServer {
    constructor({ config } = {}) {
        this._options = {
            HTTP_HOST: (process.env.HTTP_HOST || config.HTTP_HOST),
            HTTP_PORT: (process.env.HTTP_PORT || config.HTTP_PORT)
        };
    }

    get server() {
        return this._server;
    }

    run() {
        return new Promise((resolve, reject) => {
            this._server = http.createServer();
            this._server.listen(this._options.HTTP_PORT, this._options.HTTP_HOST);

            this._server.on('listening', () => resolve(this._listeningHandler()));
            this._server.on('error', (error) => reject(error));
        })
    }

    _listeningHandler() {
        console.info(
            '* http server listening:',
            `${this._options.HTTP_HOST}:${this._options.HTTP_PORT}`
        );
    }
}

module.exports = HTTPServer;
