// 1.3 sebenarny katanya constructor function itu udh punya parent namanya prototype, jd kita gaperlu bikin obj lain utk dijadikan sbg parent

function Proplayer(name, hp, mp) {
	// let player = {};
	// let player = Object.create(mPlayer);
	// katanya sbnrny js membuatkan var this n return this
	// let this = {}; atau let this Object.create(proplayer.prototype);
	this.name = name;
	this.hp = hp;
	this.mp = mp;
	// return this;
	// return player;
}

Proplayer.prototype.eat = function (foods) {
	this.hp += foods;
	return `Halo ${this.name} selamat makan!`;
}

Proplayer.prototype.play = function (hours) {
	this.mp -= hours;
}

Proplayer.prototype.sleep = function (minutes) {
	this.mp += minutes * 500;
}

let player1 = new Proplayer('orland', 900, 329);










// ini class
/*
Class Proplayer {
	constructor(name, hp, mp){
		this.name = name;
		this.hp = hp;
		this.mp = mp;
	}
	eat(foods) {
		this.hp += foods;
	}

	play(hours) {
		this.mp -= hours;
	}

	sleep(minutes) {
		this.mp += minutes * 500;
	}
}
*/