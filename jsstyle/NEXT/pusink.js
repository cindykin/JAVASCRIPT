// 1.2 fungsi object.create()


// ini 1 biasa 
function formulirplayer(name, hp, mp) {
	let player = {};
	player.name = name;
	player.hp = hp;
	player.mp = mp;
	//method ini tetap disimpan kememori walau tidak dipakai :(
	player.eat = function (foods) {
		this.hp += foods;
	};
	player.play = function (hours) {
		this.mp -= hours;
	}
	return player;
}
















// ini ke 2, pake 2 objec, lumayan epektip, tapi ribet
// tapi setiap ada method baru harus didaftarkan difunction fplayer, dan setiap ada method yg dihapus harus dihapus juga di function, itu ribet, harus buat 2 objek pulak
const methodPlayer = {
	eat : function (foods) {
		this.hp += foods;
	},
	play : function (hours) {
		this.mp -= hours;
	}
}

function fplayer(name, hp, mp) {
	let player = {};
	player.name = name;
	player.hp = hp;
	player.mp = mp;
	player.eat = methodPlayer.eat;
	player.play = methodPlayer.play;
	return player;
}



















//ini objeg.create(), supa epektip maybe? tp ribet harus care 2 objeged
const mPlayer = {
	eat : function (foods) {
		this.hp += foods;
	},
	play : function (hours) {
		this.mp -= hours;
	}
}

function proplayer(name, hp, mp) {
	//objeg.create ini parameternya ktnya bisa diisi dengan objeg lain(parent objeknya), kyk hubungin 2 obj jadi 1 ? maybe. jadi gausah tambahin 1/1 kyk yg ke 2, awto check
	let player = Object.create(mPlayer);
	// dgn adanya obj create ini gaperlu tiap ada method baru, tambah lagi kek cara 2
	player.name = name;
	player.hp = hp;
	player.mp = mp;
	return player;
}








let player1 = formulirplayer('harry', 500, 250);
let player2 = fplayer('rey', 2200, 650);
let player3 = proplayer('magi', 700, 320);
