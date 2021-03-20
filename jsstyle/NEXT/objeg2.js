/*BAHAS FUNC DECLARATION BWT OBJG 1.1 SM 1.2

FUNCTION DECLARATION = FUNCTION UTK MEMBUAT KERANGKA/FORMULIR PENDAFTARAN UTK OBJEK LITERAL
*/

function formulirplayer (name, hp, mp) {
	// harus deklarasikan obj kosong trlebih dahulu, pisahkan dgn ; bukan koma, karna ini adalah sebuah FUNCTION bukan OBJEG !
	let player = {};
	// player.name = property utk diisikan diobjek player yg tadi
	// name = nilai yg nanti akan didapat dari parameter function player1
	player.name = name;
	player.hp = hp;
	player.mp = mp;
	// player.eat = method utk diisikan diobjek player yg tadi
	player.eat = function (foods) {
		//bisa berisi lebih dri 1 statement, bisa req nilai juga
		this.hp += foods;
		console.log('Hi', this.name, 'enjoy ur foods ! \n ur HP now', this.HP);
	}
	player.play = function (hours) {
		this.hp -= hours;
	}
	// harus mengembalikan nilai/isi dari objek player. jika tidak, maka dianggap tidak ada property/method yg terdaftar diobjek yg bersangkutan
	return player;
}


//bisa panggil berkali2 tanpa tulis ulang spt objeg literal tadi hehehhhehehehehhehehehhehe
let player1 = formulirplayer('sarah', 500, 200);
let player2 = formulirplayer('keyli', 200, 800);
let player3 = formulirplayer('haren', 390, 230); 
let player4 = formulirplayer('noe', 780, 210);
let player5 = formulirplayer('farel', 210, 820);


/*
ingat ini cuma fungsi yang berisi objek kosong, kita memanfaatkan function untuk membuat sebuah KERANGKA objeg ya gais
function ini bisa kita manip utk membuat berapapun property ataupun methodnya, jadi sebaiknya buat obj literal dulu utk gambarannya, lalu baru buat kerangka utk objg tsb.
*/

















































/*
oke halo gais
skrng gw bakal bahas sesuai topik 1.2

ktnya cara diatas kita itu ga epektip buang2 memori aja
ini cara 2 lumayan epektip tapi ribet krn harus ngurus 2 objg sekaligus, lalu saat ada method yg dihapus/ditambah, 2 obj itu harus diganti isinya
*/


const metodPlayer = {
	eat : function (foods) {
		this.hp += foods;
	},
	play : function (hours) {
		this.mp -= hours;
	}
}

function propleyer (name, hp, mp) {
	let player = {};
	player.name = name;
	player.hp = hp;
	player.mp = mp;
	//tuh ribet. kalo dr obj metodplayer ad dihapus/tambah maka disini juga harus dihapus/ditambah
	player.eat = metodPlayer.eat;
	player.play = metodPlayer.play;
	return player;
}











/*
ini cara 3 katanya paling epektip utk func declaration
pake object.create(); automasisasi, versi lebih perf dari cara ke2 tadi
jadi kita gperlu cocokan 1-1 dari 2 obj itu
*/


const makPlayer = {
	eat : function (foods) {
		this.hp += foods;
	},
	play : function (hours) {
		this.mp -= hours;
	}
}

function ppleyer (name, hp, mp) {
	let player = Object.create(makPlayer);
	player.name = name;
	player.hp = hp;
	player.mp = mp;
	return player;
}