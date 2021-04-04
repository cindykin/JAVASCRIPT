const fs = require('fs')
const clog = console.log
const chalk = require('chalk')
const validator = require('validator')

const dirPath = './data'
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

const filePath = './data/contacts.json'
if(!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
}


const simpanKontak = (nama, notelp, email) => {
    const user = { nama, notelp, email }

    const file = fs.readFileSync('./data/contacts.json', 'utf-8')
            
    const users = JSON.parse(file)

    // cek duplikat
    const duplikat = users.find((user) => user.nama === nama)
    if (duplikat) {
        clog(chalk.red.inverse.bold(`sudah ada kontak yang terdaftar atas nama ${nama}, mohon ketikkan nama lain !`))
        return false
    }

    // cek email
    // if(!validator.isEmail(email)){
        // clog(chalk.red.inverse.bold('email yang anda kirim bukan format email yang benar, mohon cek ulang email anda !'))}

    users.push(user)

    fs.writeFileSync('./data/contacts.json', JSON.stringify(users))
            
    clog('Data sudah tersimpan dengan baik\nTerimakasih sudah menggunakan layanan kami!')
}


module.exports = {
    simpanKontak : simpanKontak
}