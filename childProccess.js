const { exec, spawn } = require('child_process');
const fs = require('fs')
const path = require('path')
const node = spawn('node')
node.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
});
/*     -spawn node- -   */
const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
    console.log(`Number of files ${data}`);
});
const main = spawn('')

/*     -exec node- -   */
exec('find . -type f | wc -l', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }

    console.log(`Number of files ${stdout}`);
});
