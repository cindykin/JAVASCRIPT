// 1.1 obj revisited sbnrnyo



// klo PHP gasalah this tu kayak method yg berfungsi utk menangkap nilai dari var yang baru dibuat, berada stlh keyword this
// - utk menangkap var yg belum diinsialisasikan saat this ada
// - utk menangkap var yg berada diluar function
function person (name, age) {
	this.name = name;
	this.age = age;
	// kayak ini var bornYear sblmnya blm ada nilainya. alias baru diinsialisasikan nilainya saat method this selesai diketik
	this.yearOfBirth = bornYear;
}
// ini nih baru dinisialisasi nilainya
function bornYear() {
	return 2016 - this.age;
}
// jadi this itu memungkinkan utk mengambil nilai dari var yg baru saja dibuat setelah this tertuliskan ???????

// btw ya this diJS itu == objg window :) jadi this sendiri adalah obj default yg dibuat olh js kita cuma nambahin n manggil property serta method dari obj this sendiri. INTINYA THIS BUKAN SEBUAH KEYWORD MELAINKAN OBJEK GLOBAL DEFAULT YG DIBUAT OLEH JS, SEDANGKAN KITA HANYA MENAMBAH SERTA MENGURANGI PROPERTY/METHOD DARI OBJG THIS ITU SENDIRI



























// obj literal : tidak efektif utk obj yg byk, sumber masalah awkawkoaw
let player1 = {
	name : 'Catherine',
	HP : 100,
	play : function (time) {
		// this.HP = player1.HP yak udh gitu ae
		this.HP = this.HP - time;
		console.log('Hi', this.name, 'u was played for ', time, ' ! \n ur HP now', this.HP);
	},
	eat : function (numbOfFood) {
		/*
		disini gw tambah ngerti maksud this. Dimana disini this adl keyword yang digunakan utk mengakses variable diluar function/var global, mUnGkIn yA dgn syarat var itu berada didalam 1 obj yang sama
		kalo kita ketik gini saja => HP = HP + foods;
		saat function dijalankan => 'HP' is not defined, tidak ada var HP yang diacu. Alias JS tidak menyadari adanya var HP tsb (karna JS menganut function scope, jadi jika ada var didalam function hanya bisa diakses dari dalam function. Jika dari dalam function ingin mengakses var luar, maka harus menambahkan this, agar bisa mengacu/mengakses ke var diluar function)
		singkatnya this bisa mengacu ke global variable, variabel diluar fungsi haha */
		this.HP = this.HP + numbOfFood;
		console.log('Hi', this.name, 'enjoy ur foods ! \n ur HP now', this.HP);
	}
};

let player10 = {
	name : 'Farah',
	HP : 300,
	play : function (numbOfTime) {
		this.HP -= numbOfTime;
		console.log('Hi', this.name, 'u was played for ', time, ' ! \n ur HP now', this.HP);
	},
	eat : function (numbOfFood) {
		this.HP += numbOfFood;
		console.log('Hi', this.name, 'enjoy ur foods ! \n ur HP now', this.HP);
	}
}






//function declaration : membuat kerangka sumber masalah cara ribet
// harus deklarasi variabel, tidak lupa direturn
function playerRibet (name, HP) {
	let player = {};
	player.name = name;
	player.HP = HP;
	player.eat = function(numbOfFood) {
		//this disini mengacu ke nilai property hp yg SUDAH terisikan nilai dari parameter tadi
		this.HP += numbOfFood;
		console.log('Hi', this.name, 'enjoy ur foods ! \n ur HP now', this.HP);
	};
	player.play = function(time) {
		this.HP -= time;
		console.log('Hi', this.name, 'u was played for ', time, ' ! \n ur HP now', this.HP);
	}
	//btw gais gw td lupa tambahin return jadi nilainya ga dimasukkin ke obj player :(, return penting ya !
	return player;
}

let player2 = playerRibet('Kosinus', 200);












//constructor : buat kerangka sumber masalah versi ringkas, lite awkoako
// buat fungsi spt biasa, jangan lupa new
function PlayerLite (name, HP) {
	this.name = name;
	this.HP = HP;
	this.eat = function (numbOfFood){
		this.HP += numbOfFood;
		console.log('Hi', this.name, 'enjoy ur foods ! \n ur HP now', this.HP);
	}
	this.play = function (time) {
		this.HP -= time;
		console.log('Hi', this.name, 'u was played for ', time, ' ! \n ur HP now', this.HP);
	}
}

let player3 = new PlayerLite ('lauren', 300);