const http = require('http')
const fs = require('fs')
const port = 3000

http
    .createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })

        const url = req.url;
        if (url === '/about') {
            res.write('about page')
            res.end()
        } else if(url === '/contact') {
            res.write('contact page')
            res.end()   
        } else {
            fs.readFile('./index.html', (err, data) => {
                if (err) {
                    res.writeHead(404)
                    res.write('file tidak ditemukan')
                } else {
                    res.write(data)
                }
                res.end()
            })
        }

    })
    .listen(port, ()=> {
        console.log(`server is running on port ${port}`)
    })