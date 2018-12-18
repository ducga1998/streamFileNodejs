process.stdout.write('test test test de\n')
let counter = 0
process.on('exit ' , () => {
    console.log('die process')
})
const server = require('net').createServer()
function timeStamp(){
    const now = new Date()
    return `${now.getHours() : ${now.get}}`
}
server.on('connection', socket => {
    // inf fact => each socket have private id 
    socket.id =  counter ++ 
    console.log('client connected')
    socket.write('welcome  new client !!!')
    socket.on('data' , data => {
        if(!sockets[socket.id]){
            socket.write(`welcome ${socket.name}\n`)
            socket[socket.id] = socket
            return;
        }
        Object.entries(sockets).forEach(([key , value]) => {
            if(socket.id === key) return 
            
        })
        console.log('data is , ', data)
        socket.write('data is : ')
        socket.write(data)
    })
    socket.on('end' , () => {
        console.log('client disconected')
    })

})
server.listen(8000  , () => { console.log('server bound ')})