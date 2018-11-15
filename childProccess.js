const { exec, spawn } = require('child_process');
const fs = require('fs')
const path = require('path')
const http = require('http')
function spawnLearn() {
    const node = spawn('node')
    node.stdout.on('data', (data) => {
        console.log(`child stdout:\n${data}`);
    });
    /*     -spawn node- -   */
    const find = spawn('find', ['.', '-type', 'f']);
    const wc = spawn('wc', ['-l']);

    find.stdout.pipe(wc.stdin);

    wc.stdout.on('a', (data) => {
        console.log(`Number of files ${data}`);
    });
}
function spawnConfigAdv() {
    const main = spawn('node -v', {
        shell: true,
        stdio: 'inherit'
    })
}
// main.stdout.on('data', (data) => {
//     console.log(data)
// })

/*     -exec node- -   */
function execNode() {
    exec('find . -type f | wc -l', (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return;
        }

        console.log(`Number of files ${stdout}`);
    });
    process.on('message', (msg) => {
        console.log('Message from parent:', msg);
    });
}

// setInterval(() => {
//     process.send({ counter: counter++ });
// }, 1000);
/*  - -- -  fork - -- */
// explain : fork =>
function learnFork() {
    const { fork } = require('child_process');

    const forked = fork('a.js');

    forked.on('message', (msg) => {
        console.log('Message from child', msg);
    });

    forked.send('casckasnjcnjkasnjcnasjkncask')
}
//  combine http and forker 
const longComputation = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    };
    return sum;
};
const server = http.createServer()
const { fork } = require('child_process');
server.on('request', (req, res) => {

    if (req.url === '/compute') {
        const compute = fork('resolve.js');
        compute.send('start');
        compute.on('message', sum => {
            res.end(`Sum is ${sum}`);
        });

    }
    else {
        res.end('Ok')
    }
})
/*
This program has a big problem; when the the /compute endpoint is requested,
the server will not be able to handle any other requests because the event loop is busy with the long for loop operation.
 */

//   : )  yes , this. is example we apply way resolve this problem
server.listen(3001)