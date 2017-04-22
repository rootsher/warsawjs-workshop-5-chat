const io = require('socket.io-client');
const readline = require('readline');
const EOL = require('os').EOL;
const util = require('util');

const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const options = {
    URL: process.env.URL || 'http://localhost:3001'
};

const socket = io.connect(options.URL, {
    transports: [ 'websocket' ]
});

function writeLine(line, ...args) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(util.format(line, ...args) + EOL);
    cli.prompt(true);
}

cli.setPrompt('anonymous> ');
cli.prompt();

cli.on('line', (line) => {
    if (line[0] === '/') {
        const parts = line.slice(1).split(' ');
        const commandName = parts[0];
        const commandArgs = parts.slice(1);

        socket.emit('command', { name: commandName, args: commandArgs });
    } else {
        socket.emit('chat', line);
    }

    cli.prompt();
});

socket.on('chat', (message) => {
    writeLine(message);
});

socket.on('command', (message) => {
    writeLine(message);
});
