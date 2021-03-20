// floor = pembulatan kebawah
// random = angka random dibawah 1
// makanya dikali 10 biar range 0-10, dan ditambah 1 biar range 1-10



const userInput = prompt('try to test your lucky number from 1-10 !');

const randomInput = Math.floor(Math.random()*10) + 1;

if (userInput === randomInput) {
    alert(`PING PONG ! You are smart! \nThe answer is ${randomInput} !`)
} else {
    alert(`OOPS ! You are wrong! \nThe answer is ${randomInput}, but your answer is ${userInput} !`)
}