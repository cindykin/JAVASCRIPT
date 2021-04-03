const fs = require('fs')
const clog = console.log
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const dirPath = './data'
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

const filePath = './data/contacts.json'
if(!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
}


const tulisPertanyaan = (question) => {
    return new Promise ((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })        
    })
}


const simpanKontak = (nama, notelp, email) => {
    const user = { nama, notelp, email }

    const file = fs.readFileSync('./data/contacts.json', 'utf-8')
            
    const users = JSON.parse(file)

    users.push(user)

    fs.writeFileSync('./data/contacts.json', JSON.stringify(users))
            
    clog('Data sudah tersimpan dengan baik\nTerimakasih sudah menggunakan layanan kami!')
    rl.close()
}


module.exports = {
    tulisPertanyaan : tulisPertanyaan,
    simpanKontak : simpanKontak
}