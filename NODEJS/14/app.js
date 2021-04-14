
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome home')
})

app.get('/contact', (req, res) => {
    res.send('Halaman contact')
})

app.use('/', (req, res)=> {
    res.status(404)
    res.send('tidak bisa menemukan halaman yg dicari!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
