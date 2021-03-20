// param utk object Date = new Date(year, month, day, hours, minutes, seconds, milliseconds);


today = new Date();
const cmas = new Date(today.getFullYear(), 11, 25);     // year, dec, 25
// console.log(cmas) boleh dicek kalo masih penasaran


// blm ngerti disini
if (today.getMonth()==11 && today.getDate()>25) {
cmas.setFullYear(cmas.getFullYear()+1); 
}

const oneDay = 1000*60*60*24;   // 1 day = xxx ms
alert(Math.ceil((cmas.getTime()-today.getTime())/(oneDay))+
" days left until Christmas!");
