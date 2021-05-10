const fs = require('fs')
const { get } = require('http')
const clog = console.log

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

const findKontak = (name) => {
    const contacts = getKontak()
    
    const detail = contacts.find(contact => contact.name === name)

    if(!detail) {
        console.log('gaada kontak dengan nama spt itu')
        return false
    } 

    return detail
}

module.exports = { getKontak, findKontak }