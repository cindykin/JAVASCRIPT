// pemblajaran object dr js dasar y gais

// ceritany ak pny agensi idol gtu. Jadi disini aku bru punya 1 unit grup idol.
// aku mau ngatur member unit idol(cherry) aku butuh objek

// objek = {};
// array = [];



// DASAR DARI OBJEK :: OBJ LITERAL
// apapun cara yg digunakan PASTI hasil/outputnya adl obj literal ini

// buat objek member cherry 1
var cherry1 = {
	name : 'Kin Victor',
	nid : '7382648392',
	role : 'Lead Dancer',
	email : 'kinxvictor@gmail.com'
}

var cherry7 = {
	name : 'Queen',
	nid : '5486248392',
	role : 'Rap',
	email : 'queensmol@oc.co'
}
//tinggal panggil spt function bedanya ini sdh objnya sudah dimasukkan kedlm variable
//jadi tinggal panggil nama variabelnya/namaVariable.property(cherry1.role)
console.log(cherry1);
console.log(cherry7);










// function declaration
// spt buat kerangka/form utk obj literal, memudahkan kita apbla objnya banyak
//					value/nilai utk property obj
function unitCherry (name, nid, role, email){
	//buat kerangka utk masing2 member unit cherry
	var cherry = {};
	//deklarasikan obj kosong
	cherry.name = name;
	//buat property yg diperlukan obj
	cherry.nid = nid;
	cherry.role = role;
	cherry.email = email;
	return cherry;
	//kembalikan nilai property
}

/*
krng lebih hasil kerangkanya(function unitCherry) begini
terbuat obj baru bernama cherry yg berisi property yg telah terisi nilai
var cherry = {
	yg disblh kiri => property obj cherry, yg disblh kanan itu nilai dari property obj cherry, yg didapat dari parameter function unitCherry
	cherry = {
	name : name; 	name :'yuki',
	nid : nid; 	 	nid : '9382910382',
	role : role; 	role : 'main vocalis',
	email : email;	email : 'yukiyuki@velvet.com'
	}
} */



//tinggal panggil functionnya, tapi supaya nilai dari fungsinya bisa dilihat/tersimpan, maka disimpan kedalam variable
//panggil cherry2/cherry2.email
var cherry2 = unitCherry('yuki', '9382910382', 'Main Vocalis', 'yuiyuki@velvet.com');
var cherry5 = unitCherry('peter', '9483920184', 'Main Dancer', 'peterpet@eri.co');
















// constructor
function Cherry(name, nid, role, email) {
	//di constructor, this ini mengacu ke (spt membuat) var baru. katanya klo kita pake keyword this, dia membuat variabel baru dan langsung inisialisasi property.
	//jadi sm aja kita mmbuat var baru, berisi property nama, nid, role, email, jadi mempersingkat proses compile program. Karna var langsung dibuat dan langsung diberi property
	this.name = name;
	this.nid = nid;
	this.role = role;
	this.email = email;
}


//tinggal panggil functionnya, tapi supaya nilai dari fungsinya bisa dilihat/tersimpan, maka disimpan kedalam variable
//tambahan jika constructor maka tambahkan keyword new
//panggil cherry3/cherry3.nid
var cherry3 = new Cherry ('irene', '0382917492', 'Leader', 'hoshiirene@re.co');
var cherry4 = new Cherry ('orland', '9382038549', 'Lead Vocalis', 'orlanlan@de.co');





/*
obj literal = objek yg sesungguhnya
function declaration = fungsi yg membuat kerangka yg outputnya obj literal
constructor = sama seperti function declaration, tapi lebih ringkas

perbedaan func declaration dgn constructor :
function declaration = harus deklarasikan obj kosong, lalu mengembalikan nilai obj
constructor = tidak perlu deklarasikan obj kosong, memakai keyword this, memakai new utk inisialisasi saat membuat obj baru
*/