
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Welcome home')
  
  // res.json({
  //   name: 'freya',
  //   class: 'fifth grade'
  // })
  
  res.sendFile('./index.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    res.send('Halaman contact')
})

app.get('/toys/:id', (req, res) => {
  res.send(`${req.query.name} toy ID : ${req.params.id}`)
})

app.use('/', (req, res)=> {
    res.status(404)
    res.send('tidak bisa menemukan halaman yg dicari!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
