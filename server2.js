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
    let string = ""
    const allFile = fs.readdirSync(path.resolve('../'), (err, data) => {
        console.log(data)
    })
    // console.log(allFile)
    allFile.filter(item => !!item.match(/[.]/)).map(item => {
        console.log(item)
        console.log(path.resolve('../' + item))
        let readfile = fs.readFileSync(path.resolve('../' + item))
        string = string + readfile.toString()
        // fs.createReadStream(path.resolve(item)).on('data', function (data) {
        //     // const writeStream = fs.createWriteStream(path.resolve('test'))
        //     // writeStream.write(data.toString())
        //     console.log(data)
        // })
        // fs.createReadStream(path.resolve(item)).on('')
        // fs.createReadStream(path.resolve(item)).on(data => {
        //     console.log(data.toString())
        // })
    })
    fs.writeFileSync(path.resolve('test.txt'), string)

}
getFullFileInFolder()

