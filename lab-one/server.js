//
const http = require('http')
const path = require('path')
const fs = require('fs')
const server = http.createServer()
const PORT = 8080 || process.env.PORT
const html = 'index.html'
const html2 = 'index2.html'

server.on('request', (req, res) => {
    fs.readFile(path.resolve(__dirname, html), 'utf8', (err, data) => {
        if (err) {
            console.log('Page is not found\n')
            res.statusCode = 404
            res.end(`<h1>Error ${res.statusCode}</h1>`)
        } else {
            console.log('Page is loaded\n')
            res.statusCode = 200
            res.end(data)
        }
    })
})

server.listen(PORT, () => console.log('Server is running...'))