const Emitter = require('events')
const fs = require('fs')
const path = require('path')
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
// instanceTest.excute(() => {
//     console.log('middware process ..')
// })
class WithTime extends Emitter {
    async execute(asyncFunc, ...args) {
        this.emit('begin');
        try {
            console.time('execute');
            const data = await asyncFunc(...args);
            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        } catch (err) {
            this.emit('error', err);
        }
    }
}
const eventWidthTime = new WithTime()
eventWidthTime.on('begin', () => {
    console.log('beginnn . .')
})
eventWidthTime.on('end', () => {
    console.log('endddd . . ')
})
eventWidthTime.execute(fs.readFileSync, path.resolve('workerCode.js'))