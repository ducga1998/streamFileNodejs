const server = require('https').server
const fs = require('fs')
const path = require('path')
server.on('request', (res, req) => {
    const all = fs.createReadStream(path.resolve('test.js')).pipe(fs.createWriteStream('text.txt'))

})