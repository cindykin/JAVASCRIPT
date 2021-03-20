const fs = require('fs')

// MENULIS + MEMBUAT FILE
// fs.writeFileSync('dari-node.txt', 'yahahaa wahyu i lup yu tapi boonk secara synchronous')

/*
try {
    fs.writeFileSync('dari-node.txt', 'yahahaa wahyu i lup yu tapi boonk secara synchronous')
} catch (err) {
    console.log(err)
}

fs.writeFile('dari-node2.txt', 'i lup yu secara async', (err) => {
    console.log(err)
    // if(err) throw err;
    // console.log('the file has been created/modified and saved')
})

*/


// MEMBACA FILE
/*
const data = fs.readFileSync('dari-node.txt', 'utf-8')
console.log(data)


fs.readFile('dari-node2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 .txt', 'utf-8', (err, data) => {
    if(err) throw err
    console.log(data)
})
*/


// READLINE
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*
rl.question('DO you LOVe mE ? ', (answer)=> {
    rl.question(`${answer}? Really you love me? `, (answer) => {
        rl.question(`${answer} OMG I see you really like me huh!! `, (answer)=> {
            console.log(`${answer}? But, sorry i don't love you anymore`)
            rl.close()
        })
    }) 
})
*/


// MENGAMBIL DATA USER DARI INPUTAN LALU DITULIS KEDALAM FILE
rl.question('Username : ', (uname)=> {
    rl.question('Password : ', (password)=>{
        const user = {
            username : uname,
            password : password
        }
        const file = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(file)
        users.push(user)
        console.log(users)
        fs.writeFileSync('users.json', JSON.stringify(users))

        rl.close()
    })
})

// how to add data wo deleting  the existing data