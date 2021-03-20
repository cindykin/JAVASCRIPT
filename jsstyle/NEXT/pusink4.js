/* 2.2 closure





closure itu menurut aku kayak function didlm function, dan function yg letaknya didalam function itu membutuhkan nilai dari function parentnya baru bisa disebut dengan closure


lexical scope : ada ga nama di dlm show klo gaada cari diatasnya lagi, ada ga difunction init klo ga ada dia terus cari diatasnya lagi, sampai ketemu global objectnya = window
*/
function init() {
	let nama = 'peter'; // local var
	function show(nama) { // (closure)inner function : bisa memiliki akses ke parent variablenya
		// inner function butuh var yg ada diparent scopenya maka inner function ini disebut dgn closure
		console.log(nama); // akses ke parent variabel
	}
	show();

	console.log(show());
	//liat closure di dir
	console.dir(show);
	
	return show; // ini functionnya baru jalan sebagian
}
// init();

let call = init();
call('terren');


function init() {
	return function (nama) {
		console.log(nama);
	}
}
let call = init();
call('rixy');
call('greyo');










function sayGreetings(time){
	return function(name) {
		console.log(`halo ${name}, selamat ${waktu}, semoga harimu hepi awkwkkwk`);
	}
}

let goodMorning = sayGreetings('pagi');
let goodNight = sayGreetings('malam');

goodMorning('aster');
console.dir(goodNight);






























//bahaya karna sewaktu2 value counter bisa diset ulang
let counter = 0;
let add = function () {
	return ++counter;
}
//karna hoisting apabila var dideklarasikan disini ttp saja nilainya akan terganti dimemori. 
let counter = 1000; //nilai counter malah jadi 1000

console.log(add());
console.log(add());










//klo kita begini problemnya nilai nya selalu 1 semua, krna nilainya sllu diset kembali ke 0
let add1 = function () {
	let counter = 0;
	return ++counter;
}
console.log(add1());
console.log(add1());












let add2 = function () {
	let counter = 0;
	return function () { //klo inner function pas dijalani add, tampilnya hanya isi function, karna function yg dijalankan baru sebagian ( yg baru jalan hanya add, inner functionnya baru jalan setengah)
		return ++counter;
	}
}
//solusinya kita harus simpan kedalam var 
//let buat jalanin inner function, dan add() buat jalanin semua function
let tambah = add2();

console.log(add2());
console.log(add2());










// baru bener, counter tdk akan bisa diubah dari luar
let add3 = (function () {
	let counter = 0;
	return function () { 
		return ++counter;
	}
})();

console.log(add3());
console.log(add3());