const request = require('request')
const fs = require('fs')
request('https://docs.google.com/document/d/10I0bl8nX8h7XSf8gl_S3D8yhf5tNhSNIKZYHK9kopKg/edit#').pipe(fs.createWriteStream('1.html'))