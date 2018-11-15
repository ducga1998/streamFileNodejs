
console.log('casccas')
console.log(1 + 2)
function A() {
    console.log('cascascnasjkcnkajsncjknasncjkansca')
}
A()
setInterval(() => {
    process.send({ count: 1 })
}, 1000)
process.send('file a.js send data from childProcces.js')
