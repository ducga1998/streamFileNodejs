const fs = require('fs')
const path = require('path')
function getFullNameFolderInTemplate() {
    const folderArr = fs.readdirSync(path.resolve('templates'))
    folderArr.map(item => {
        const itemFolder = fs.readdirSync(path.resolve('templates/' + item)).map(
            itemSub => {
                console.log('1')
                fs.createReadStream(path.resolve('templates/' + item + '/data.json')).pipe(fs.createWriteStream(path.resolve('test.js')))
            }
        )

    })

}
// getFullNameFolderInTemplate()
function getFullFileInFolder() {
    const allFile = fs.readdirSync(path.resolve(''), (err, data) => {
        console.log(data)
    })
    // console.log(allFile)
    allFile.map(item => {
        console.log(item)
        fs.createReadStream(path.resolve(item)).on('data', function (data) {
            console.log(data.toString())
        })
        // fs.createReadStream(path.resolve(item)).on(data => {
        //     console.log(data.toString())
        // })
    })

}
getFullFileInFolder()

