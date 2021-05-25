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
    const newContacts = contacts.filter(c => c.name !== name)

    if(contacts.length === newContacts.length) {
        return 404
    } 
    
    saveKontak(newContacts)
    return 200
}

const editKontak = (changedContact) => {
    const contacts = getKontak()

    const newContacts = contacts.filter(contact => contact.name !== changedContact.oldname)
    delete changedContact.oldname
    newContacts.push(changedContact)
    saveKontak(newContacts)
}



module.exports = { getKontak, findKontak , addKontak, cekDuplicateName, deleteKontak, editKontak }