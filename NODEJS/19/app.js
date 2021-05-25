
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { body, validationResult, check } = require('express-validator');
const app = express()
const port = 3000
const {getKontak, findKontak , addKontak, cekDuplicateName, deleteKontak, editKontak} = require('./utils/contacts')


const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
app.use(cookieParser('secret'))
app.use(
  session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
)
app.use(flash())


app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

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
    students,
    msg: req.flash('msg')
  })
})

app.get('/contact/add', (req, res) => {
  res.render('add', {
    title: 'Add Contact',
    layout: 'layouts/mainlayout'
  })
})


app.get('/contact/edit/:name', (req,res) => {
  const contact = findKontak(req.params.name)
  res.render('edit', {
    title: `${req.params.name} edit`,
    layout : 'layouts/mainlayout',
    contact
  })
})

app.get('/contact/delete/:name', (req, res) => {
  const contact = findKontak(req.params.name)
  if(!contact) {
    res.status('404')
    res.send('contact not found')
  } else {
    if(deleteKontak(req.params.name) === 200) {
      req.flash('msg', 'success deleted')
      res.redirect('/contact')
    } else {
      res.send('failed to delete')
    }
  }
})

app.get('/contact/:name', (req, res) => {
  const contact = findKontak(req.params.name)
  res.render('detail', {
    title: `${req.params.name} detail`,
    layout : 'layouts/mainlayout',
    contact
  })
})


app.post('/contact', [
  body('name').custom(value => {
    const duplicate = cekDuplicateName(value)
    if(duplicate) {
      throw new Error('the name has been used')
    }
    return true;
  }),

  check('telp', 'your mobile phone is invalid').isMobilePhone('any')
],

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('add', {
        title: 'Add Contact',
        layout: 'layouts/mainlayout',
        errors : errors.array()
      })
    } else {
      addKontak(req.body)
      req.flash('msg', 'data kontak berhasil ditambahkan')
      res.redirect('/contact')
    }
  }
)



app.post('/contact/update', 
[
  body('name').custom(value => {
    if(body('oldname') !== value && cekDuplicateName(value)) {
        throw new Error('the name has been used')
    }
    return true; 
  })

],

  (req,res) => {  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('edit', {
        title: 'Edit Contact',
        layout: 'layouts/mainlayout',
        errors : errors.array(),
        contact : req.body
      })
    } else {
      editKontak(req.body)
      req.flash('msg', 'data kontak berhasil diganti')
      res.redirect('/contact')
    }
})




app.use('/', (req, res)=> {
    res.status(404)
    res.send('tidak bisa menemukan halaman yg dicari!')
})

app.listen(port, () => {
  console.log(`i love you at http://localhost:${port}`)
})
