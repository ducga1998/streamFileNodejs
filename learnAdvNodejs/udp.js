const dgram = require('dgram')
const server = dgram.createSocket('udp4')
server.on('listening' , () => {console.log('UDP server listening')})
server.on('message' , (msg  , rinfo ) => {
    console.log(`${rinfo.port} : ${rinfo.address}-${msg}`)
})
const PORT  = 3333
const HOST  = '127.0.0.1'
server.bind(PORT  , HOST)
// client

setInterval(() => {
    const client  = dgram.createSocket('udp4')
    const msg  = Buffer.from('Pluralsigth rocksss')
    client.send('OK' , PORT  , HOST  , (err) => {
        if(err){
            console.log(err)
        }
        console.log('OKKK')
        client.close()
    })
},1000)