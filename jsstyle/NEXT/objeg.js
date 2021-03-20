/*
TENTANG OBJEG Y GEIS 1.1
sorry banget aku masih sering lupa gitu konsep objek jadi ini aku buat satu2 ringkasan super lengkap nya 

OBJEG LITERAL = hasil dari func declaration & constructor
tydac epektip bila ingin membuat obj yg banyak, karna harus dideklarasi sesuai jumlah obj yg ingin dibuat
wujud objek yang sebenarnya kamu bisa lihat di console

ini adalah perilaku objek
objekKosong = {};
*/

let player1 = {
	name : 'borris', // pemeberian nilai property/method memakai : bukan = Setelah selesai menulis property dipisahkan dengan koma, bukan ;
	hp : 200,
	// ini namanya property (var yg berada didalam obj)
	mp : 150,
	// ini namanya method (function yg berada didalam obj)
	eat : function (foods) {
		//this.hp = mengacu/mentargetkan ke variable hp yg berada diluar function
		this.hp = this.hp + foods;
	},
	play : function (hours) {
		this.mp = this.mp - hours;
	} 
}


//didalam 1 method bisa berisi lebih dari 1 statement perintah
let player2 = {
	name : 'guntur', 
	hp : 200,
	mp : 300,
	eat : function (foods) {
		this.hp += foods;
		console.log('Hi', this.name, 'enjoy ur foods ! \n ur HP now', this.HP);
	},
	play : function (hours) {
		this.mp -= hours;
		console.log('Hi', this.name, 'u was played for ', hours, ' ! \n ur HP now', this.HP);
	} 
}

console.log(player1);
console.log(player2.play(100));
/*
bisa langsung dipanggil diconsole/dgn perintah console.log() dgn memanggil nama objeknya, yaitu player1
jika ingin memanggil property/methodnya tinggal tambahkan titik lalu tambahkan nama property/methodnya, yaitu player1.name/player1.eat(100).

kenapa method harus ada nilai didalam kurung ?, karna method ==  function, bila function butuh parameter, maka kita tinggal mengisikan argumen untuk parameter tsb.
dengan cara memanggil nama dari methodnya lalu isikan nilai utk param tsb


cara mengakses/memanggil objek dgn cara :
tangkap nama objek, lalu tangkap nama methodnya
spt obj document/window punya byk method (yg event bae) jdi gausah hapal lagi methodnya apa wkkw 
spt window.innerWidth (case sensitive ya gaisu)
*/