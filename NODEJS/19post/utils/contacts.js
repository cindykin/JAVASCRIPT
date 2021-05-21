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
    const file = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(file)
}

const findKontak = (name) => {
    const contacts = getKontak()
    
    const detail = contacts.find(contact => contact.name === name)

    if(!detail) {
        clog('gaada kontak dengan nama spt itu')
        return false
    } 

    return detail
}


const saveKontak = (contacts) => {
    fs.writeFileSync(filePath, JSON.stringify(contacts))
}

const addKontak = (data) => {
    
    const contact = {
        name : data.name,
        telp : data.telp
    }

    const contacts = getKontak()
    contacts.push(contact)
    saveKontak(contacts)
}

const cekDuplicateName = (name) => {
    const contacts = getKontak()
    return contacts.find(contact => contact.name === name)
}

const deleteKontak = (name) => {
    const contacts = getKontak()
    const contactsNew = contacts.filter(contact => contact.name !== name)

    if(contactsNew.length === contacts) {
        clog('tidak ada nama yang dimaksud')
    }

    return saveKontak(contactsNew)
}

module.exports = { getKontak, findKontak , addKontak, cekDuplicateName, deleteKontak }