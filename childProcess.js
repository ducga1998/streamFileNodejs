const Emitter = require('events')
// const Emitter = emmtEventEmitter()
//EXAMLE  eveny emmiter in nodejs
class Test extends Emitter {
    excute(callback) {
        this.emit('begin')
        callback()
        this.emit('end')
    }
}
const instanceTest = new Test()
instanceTest.on('begin', () => {
    console.log('begin ...')
})
instanceTest.on('end', () => {
    console.log('end .....')
})
instanceTest.excute(() => {
    console.log('middware process ..')
})
