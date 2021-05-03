
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(expressLayouts)

app.get('/', (req, res) => {
  const students = [
    {
      name : 'Harris',
      grade : '11'
    }
  ]
  res.render('index', {
    title: 'Index Page',
    students,
    layout: 'layouts/mainlayout'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {title: 'About Page', layout: 'layouts/mainlayout'})
})


app.use('/', (req, res)=> {
    res.status(404)
    res.send('tidak bisa menemukan halaman yg dicari!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
