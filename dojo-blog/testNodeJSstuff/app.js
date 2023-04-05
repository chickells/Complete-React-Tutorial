const EventEmitter = require('events');
const emitter = new EventEmitter();
const http = require('http')

// about to create a mfin server object
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text'})
    res.write('<button>ur mom</button>') // THE RESPONSE
    res.end(); // ends it
}).listen(6969)

// Register a listener
emitter.on('messageLogged', () => {
    console.log('Listener called');
})

// Raise an event
emitter.emit('messageLogged');
