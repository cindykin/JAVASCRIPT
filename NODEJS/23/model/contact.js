const mongoose = require('mongoose')

// buat schema
const Contact = mongoose.model('Contact', {
    name: {
        type: String,
        required: true,   
    },
    nohp: {
        type: String,
        required: true,
    },
    email: {
        type: String
    }
})

module.exports = Contact
