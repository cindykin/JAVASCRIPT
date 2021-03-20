// 3.1 arrow function.
// versi lebih singkat males utk function expression
// tidak semua function (baik declaration/expression) bisa diubah jd arrow function ya :)



// ini function declaration, langsung beri nama, tulis isi functionnya, lalu panggil nama functionnnya beserta argument utk paramnya
function welcome1(apaaja) {
	console.log ('halo', apaaja);
}

welcome1('kekejel1');





// ini function expression, isi function disimpan kedalam var, lalu panggil nama si var yg menampung function beserta argument utk paramnya
let welcome2 = function (apaaja) {
    console.log ('halo', apaaja);
}

welcome2('kejelkejel2');






// dannn inilah versi arrow functionnya
let welcome3 = (apaaja) => {
    return 'halo ' + apaaja;
}

console.log(welcome3('kejelkejel3'));














// perilaku arrow function yg saat ini ak tau
const ceksaldo1 = function (money) {
	return `hello, duit lo sisa ${money} hahah abis tuh`;
}
console.log(ceksaldo1('5 rebuh'));




// 1 param
const ceksaldo2 = (money) => { return `bro duit lo sisa ${money} hahha bokekkkk`; }
console.log(ceksaldo2('3 rebu'));

// 1 param versi males/implisit return
const ceksaldo3 = money => `hayoo duit loe siso ${money}`;
console.log(ceksaldo3('1 rebu, yailah 1rb ngp dk 0,001 rebu be'));




// lebih dari 1 param BEST SELLER
const ceksaldo4 = (waktu, money) => {
    return `heh ${waktu} bro, duit lu sisa ${money} heheh`;
}
console.log(ceksaldo4('sore', 'duarebu'));



// no param, tanda kurung ttp ada, jika return cm sebaris boleh diilangi
const displayName = () => 'helu woruldo';
console.log(displayName());


