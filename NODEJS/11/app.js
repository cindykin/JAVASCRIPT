const clog = console.log
const yargs = require('yargs');
// const { simpanKontak } = require('./contacts');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'menambah kontak baru',
    builder: {
        nama : {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string',
        },
        notelp: {
            describe: 'no telepon',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'email',
            demandOption: false,
            type: 'string'
        },
    },

    handler: function(argv){
        contacts.simpanKontak(argv.nama, argv.notelp, argv.email)
    }
})
yargs.parse()