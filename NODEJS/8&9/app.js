const validator = require("validator");

// console.log(validator.isEmail('kin@gma.com'))
// console.log(validator.isNumeric('1028391230b'))



const c = require('chalk');
const clog = console.log

clog(c.yellow('hello'));
clog(c.magenta.bgYellow.bold('thank you'))

const pesan = c`ikan paus makan hiu {bgRed aku gasuka kamu} tapi boonk`;
clog(pesan)