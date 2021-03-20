/* 1.3 constructor function, versi lebih perf ? mwaybe

krn setiap obj js punya child bawaan brnama prototype(bntuknya property kali ya)
proto ini spt pseudo var gitu, jadi gabisa dipanggil dihapus, bawaan stiap obj
maka kita manfaatkan saja sianak itu hehe
utk jadikan spt objg.create itu kayaknya
*/

function ProPlayer (name, hp, mp) {
	this.name = name;
	this.hp = hp;
	this.mp = mp;
}

//panggil objnya lalu panggil prototype lalu tambahkan method yg diinginkan
ProPlayer.prototype.eat = function(foods) {
	this.hp += foods;
}

ProPlayer.prototype.play = function(hours) {
	this.mp -= hours;
}


//spt biasa buat objnya
let player = new ProPlayer ('kin', 999, 9999);

