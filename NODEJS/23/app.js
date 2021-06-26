const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const clog = console.log

require('./utils/db');
const Contact = require('./model/contact')

const app = express();
const port = 3000;



app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))



app.get('/', (req,res) => {
    res.render('index', {
        title: 'Mango Contact',
        layout: 'layouts/mainlayout'
    })
})





app.get('/contact', async (req, res) => {
    // Contact.find().then((contact) =>{ res.send(contact)})

    const contacts = await Contact.find()
    res.render('contact', {
      title: 'Contact List',
      layout: 'layouts/mainlayout',
      contacts,
      // msg: req.flash('msg')
    })
  })



app.get('/contact/:name', async (req, res) => {
    const contact = await Contact.findOne({name :req.params.name})

    res.render('detail', {
      title: `${req.params.name} detail`,
      layout : 'layouts/mainlayout',
      contact
    })
})

app.listen(port, ()=>{
    clog(`Contact App Running... clickk this http://localhost:${port} `)
})

