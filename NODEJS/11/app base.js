const clog = console.log
const yargs = require('yargs');

// yargs.command('add', 'menambah kontak baru', ()=>{}, (argv) => {
//     clog(argv)
// })


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
        const contact = {
            nama: argv.nama,
            notelp: argv.notelp,
            email: argv.email,
        }
        clog(contact)
    }
})
yargs.parse()