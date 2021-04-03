const contacts = require('./contacts')

const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukkan nama : ')
    const notelp = await contacts.tulisPertanyaan('Masukkan nomor telp : ')
    const email = await contacts.tulisPertanyaan('Masukkan email : ')
    contacts.simpanKontak(nama, notelp, email)
}

main()
