const http = require('http')
const fs = require('fs')
const port = 3000

const renderHTML = (fileHTML, res) => {
    fs.readFile(fileHTML, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('file tidak ditemukan')
        } else {
            res.write(data)
        }
        res.end()
    })
}

http
    .createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })

        const url = req.url;
        if (url === '/about') {
            renderHTML('./about.html', res)
        } else if(url === '/contact') {
            renderHTML('./contact.html', res)
        } else {
            renderHTML('./index.html', res)
        }

    })
    .listen(port, ()=> {
        console.log(`server is running on port ${port}`)
    })