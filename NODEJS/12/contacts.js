const fs = require('fs')
const clog = console.log
const chalk = require('chalk')
const validator = require('validator')
const chwarnstyle = chalk.red.inverse.bold
const chbasicstyle = chalk.cyan.bold

const dirPath = './data'
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

const filePath = './data/contacts.json'
if(!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
}

const getKontak = () => {
    const file = fs.readFileSync('./data/contacts.json', 'utf-8')
    return JSON.parse(file)
}

const simpanKontak = (nama, notelp, email) => {
    const user = { nama, notelp, email }

    const users = getKontak()

    // cek duplikat
    const duplikat = users.find((user) => user.nama === nama)
    if (duplikat) {
        clog(chwarnstyle(`sudah ada kontak yang terdaftar atas nama ${nama}, mohon ketikkan nama lain !`))
        return false
    }

    // cek notelp
    if(!validator.isMobilePhone(notelp, 'any')) {
        clog(chwarnstyle('nomor yang anda masukkan bukan merupakan format nomor yang benar!'))
        return false
    }

    // cek email
    if(email) {
        if(!validator.isEmail(email)){
            clog(chwarnstyle('email yang anda kirim bukan format email yang benar, mohon cek ulang email anda !'))
            return false
        }
    }

    users.push(user)

    fs.writeFileSync('./data/contacts.json', JSON.stringify(users))
            
    clog('Data sudah tersimpan dengan baik\nTerimakasih sudah menggunakan layanan kami!')
}


const listKontak = () => {
    const users = getKontak()
    clog(chbasicstyle('List Kontak :'))
    users.forEach((user,i) => {
        clog(`
        +++++++++++++++++++++
        Urutan : ${i+1}
        Nama : ${user.nama}
        NoTelp : ${user.notelp}
        =====================
        `)
    });
}

const detailKontak = (nama) => {
    const users = getKontak()
    clog(chbasicstyle('Detail Kontak : '))

}
module.exports = { simpanKontak, listKontak, detailKontak }