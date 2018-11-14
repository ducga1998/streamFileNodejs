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
    })
    fs.writeFileSync(path.resolve('test.txt'), string)
}
function findFile(nameFolder) {
    console.log(nameFolder)
    // console.log(path.resolve(nameFolder))
    const allFileInfolder = fs.readdirSync(path.resolve(nameFolder)).filter(item => !!item.match(/[.]/))
    const AllFolder = fs.readdirSync(path.resolve(nameFolder)).filter(item => !!!item.match(/[.]/))
    if (allFileInfolder.length > 0) {
        allFileInfolder.map(nameFile => {
            console.log('name File ===>>>> ', nameFile)

        })
    }
    else {
        console.log('name File ===>>>> not File')
    }
    if (AllFolder.length > 0) {

        AllFolder.map(folder => {
            // console.log('name =>>>', folder)
            findFile(nameFolder + '/' + folder)
        })
    }
}
findFile('../templates')
// how to find file in nodejs 
// tim tat ca  cac thu muc => vao thu muc do => lap lai qua trinh tim thu muc do cho den  khi khong con thu muc de tim nua
// getFullFileInFolder()

