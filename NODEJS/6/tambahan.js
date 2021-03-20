function sayHello(name) {
    console.log(`Hai saye ${name}`)
}

const data = 'celestial'

const student = {
    name : 'gura',
    age : 13,
    cetakStudent () {
        return `I'm ${this.name}, ${this.age} y.o.`
    }
    
}

// module.exports.sayHello = sayHello;
// module.exports.data = data;
// module.exports.student = student
module.exports = {
    sayHello : sayHello,
    data: data,
    student: student
}