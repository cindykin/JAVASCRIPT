
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000
const {getKontak, findKontak} = require('./utils/contacts')

app.set('view engine', 'ejs')

// third party middleware
app.use(expressLayouts)


// build in middleware
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Index Page',
    layout: 'layouts/mainlayout'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {title: 'About Page', layout: 'layouts/mainlayout'})
})

app.get('/contact', (req, res) => {
  const students = getKontak()
  res.render('contact', {
    title: 'Contact Page',
    layout: 'layouts/mainlayout',
    students
  })
})

app.get('/contact/:name', (req, res) => {
  const contact = findKontak(req.params.name)
  res.render('contactdetail', {
    title: `${req.params.name} detail`,
    layout : 'layouts/mainlayout',
    contact
  })
})

app.use('/', (req, res)=> {
    res.status(404)
    res.send('tidak bisa menemukan halaman yg dicari!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
