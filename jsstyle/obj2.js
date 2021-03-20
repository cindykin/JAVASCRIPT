// console.log (this);
// console.log (window);
// console.log (window === this);

// var a = 10;
// console.log (a);
// console.log (this.a);
// console.log (window.a);















//function declaration

// function hal() {
// 	console.log ('hai');
// }
// hal();
// this.hal();

// //===========================
// function halo() {
// 	console.log (this);
// 	console.log ('halo');
// }
// this.halo();
// //this mengembalikan obj global





// //objek literal
// var obj = {a : 10, nama : 'Dora'};
// obj.halo = function() {
// 	console.log ('halo');
// }
// obj.halo();

// //=============================
// var obj = {a : 10, nama : 'Dora'};
// obj.halo = function() {
// 	console.log (this.nama);
// 	console.log ('halo');
// }
// obj.halo();

// //this mengembalikan obj yang bersangkutan






//constructor
// function Halo() {
// 	console.log ('halo');
// }
// new Halo();

// //============================

function Halo() {
	console.log (this);
	console.log ('halo');
}
new Halo();

//this mengembalikan obj yg baru dibuat
//karna obj masi kosong dikembalikan obj kosong