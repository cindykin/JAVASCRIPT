const fs = require('fs')
const clog = console.log

clog('halo! selamat datang di YourContacts Lite !')

if(fs.existsSync('./data/')) {
    clog('OK! folder terdeteksi, sedang menjalankan program...')

    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Mohon ketikkan nama : ', (nama) => {
        rl.question(`Hai ${nama} mohon ketikkan nomor telefon : `, (notelp) => {
            const user = {
                nama : nama,
                notelp : notelp
            }

            if(!fs.existsSync('./data/contacts.json')) {
                fs.writeFileSync('./data/contacts.json', '[ ]', 'utf-8')
            }

            const file = fs.readFileSync('./data/contacts.json', 'utf-8')
            
            const users = JSON.parse(file)

            users.push(user)

            fs.writeFileSync('./data/contacts.json', JSON.stringify(users, null, 2))
            
            clog('Data sudah tersimpan dengan baik\nTerimakasih sudah menggunakan layanan kami!')
    
            rl.close()
        })
    })

} else {
    clog(`ERROR! sedang membuat folder yg diminta.\nmohon jalankan ulang program !`)

    fs.mkdirSync('./data')
}
