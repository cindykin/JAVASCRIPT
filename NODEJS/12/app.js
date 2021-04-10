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
}).demandCommand()

yargs.command({
    command: 'list',
    describe: 'menampilkan list kontak yang telah tersimpan',
    handler() {
        contacts.listKontak()
    }
})

yargs.command({
    command: 'detail', 
    describe: 'menampilkan detail kontak berdasarkan nama yang dimaksud',
    builder: {
        nama : {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },

    handler: function(argv){
        contacts.detailKontak(argv.nama)
    }
})

yargs.parse()