const fs = require('fs')
const clog = console.log

const dirPath = './data'
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

const filePath = './data/contacts.json'
if(!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
}



    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Mohon ketikkan nama : ', (nama) => {
        rl.question(`Mohon ketikkan nomor telp : `, (notelp) => {
            const user = { nama, notelp }

            const file = fs.readFileSync('./data/contacts.json', 'utf-8')
            
            const users = JSON.parse(file)

            users.push(user)

            fs.writeFileSync('./data/contacts.json', JSON.stringify(users))
            
            clog('Data sudah tersimpan dengan baik\nTerimakasih sudah menggunakan layanan kami!')
    
            rl.close()
        })
    })

