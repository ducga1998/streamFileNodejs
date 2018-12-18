console.log(arguments) // this practive wrapper function
// const Event = require('event')
process.stdout.write('OK \n') // process stdout as C++
process.on('start' , () => {
    console.log('nguyen minh duc')
})
// process.emit('error')
// call back now 
process.nextTick(() => {
    console.log('call next tick')
})