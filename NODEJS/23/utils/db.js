const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});



// // tambah 1 data
// const contact1 = new Contact({
//     name: 'Terry',
//     nohp: '09012391',
//     email: 'ggg@gg.vom'
// })


// // simpan ke coll
// contact1.save().then((contact)=> console.log(contact))