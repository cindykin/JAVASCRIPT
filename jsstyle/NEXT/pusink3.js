/* 2.1 excecution host?
topik yg belum clear :>/belom dibuat versi aku banget gitu :)

*/

console.log(apasi);
var apasi = 'hehe';

console.log(hi());
function hi (iniparam) {
	var boo = 'ini didalem func loh';
	console.log ('ini sesudah plus param', iniparam);
	return 'hehe', diluar;
}

var diluar = 'pasti undefined kwkw';
console.log(hi(halo));






















console.log(hehe);
var hehe = 'kin desu';
/*
CREATION PHASE
saat program dijalankan ada ada sesuatu yg terjadi yg disebut dgn creation phase/fase kreasi pada GLOBAL context
pada fase kreasi ini, js mencari var dn function dulu. Untuk var, nama var akan disimpan kedalam memori, lalu valuenya diisi dgn undefined. Untuk function, nama beserta isi/value function semuanya akan disimpan. Jadi kalian bisa memanggil function terlebih dulu baru mendefinisikannya (tydac recommendid)






cek dulu apa ada var/function didalam file js, jika ada akan dibuat nama var tsb dan diisi dgn undefined
var hehe = undefined

jika function akan diisikode function itu sendiri, bukan dijalankan functionnya
function hehe () { alert('kamu hebat') }

konsep var/function yg dicari duluan itu disebut hoisting
meski terletak dipaling bawah, var dan function akan dinaikan ke atas dan diperlakukan spt konsep diatas. Sampai js masuk ke fase eksekusi menyimpan nilai mereka dalam memori

js mendefinisikan window sbg global objeg
this == window









EXCECUTION PHASE
fase yg akan dijalankan saat fase kreasi selesai, fase dimana kode program mulai dieksekusi dari baris perbaris dari atas kebawah






lalu ada excecution phase/fase eksekusi yg akan dijalankan setelah fase kreasi
baru programnya dieksekusi baris per baris dari atas ke bawah
serta data dari memori saat creation phase jg dijalankan

console.log(sayHello);

var name = 'kin desu';
var umur = 18;
kalo var diisi undefined, kalo function diisi dgn isi functionnya, makanya kalo ditulis sebelum functionnya gpp
console.log(sayHello());

function sayHello() {
	console.log (`halo nama saya ${name} saya ${umur} tahun`)
}
*/

/*
jadi setiap function dipanggil, maka akan membuat local excecution context baru, dimana js menambahkan tumpukan eksekusi tambahan lalu saat selesai dijalankan excecution contextnya akan dihilangkan dari tumpukannya

function membuat local excecution context
yg didalamny sama terdapat creation dan excecution phase
bedanya dalam local excecution context kita bisa mengakses window serta arguments, ada hoisting local juga
*/








var nama = 'kin';
var uname = '@kinkini';

function cetakURL(uname) {
	var igURL = 'instagram.com/';
	return igURL + uname;
}
console.log(cetakURL(uname));

function cetakURL() {
	console.log(arguments);
	var igURL = 'instagram.com/';
	return igURL + uname;
}
console.log(cetakURL(@farahbala));











function a(){
	console.log('ini a');

	function b() {
		console.log('ini b');

		function c() {
			console.log('ini c');
		}

		c();
	}

	b();

}

a();













function satu() {
	var nama = 'rey';
	console.log(nama);
}

function dua() {
	console.log(nama);
}

console.log(nama);
var nama = 'yura';
satu();
dua('teri');
console.log(nama);