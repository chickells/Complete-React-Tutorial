const { log } = require('console');
const fs = require('fs')

fs.unlink('rando.txt', (err) => {
    if (err) throw err;
    log('File deleted')
})

// super inefficient but i'm deleting bitches from the mf-in node command line!!!!