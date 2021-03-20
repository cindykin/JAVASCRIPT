//perkondisian

//if else
var score = prompt('masukkan nilai test anda :');
if (score > 80) {
	alert ('selamat nilai anda ' + score + 'anda lulus test !');
} else {
	alert ('maaf nilai anda ' + score + 'anda belum lulus test !');
}


//if; else if; else
var angka = 8;
if (angka % 2 == 0) {
	console.log ('angka' + angka + ' merupakan bilangan genap !');
} else if (angka % 2 == 1) {
	console.log ('angka' + angka + ' merupakan bilangan ganjil');
} else {
	console.log ('maaf yang anda masukkan bukan angka');
};



//switch
var food = prompt('masukkan makanan kesukaannya kin');
switch (food) {
	case 'roti' :
	case 'burger' :
	case 'spagethi' :
	case 'kebab' :
		alert ('itu makanan yg kin suka ya');
		break;
	case 'obat' :
	case 'mie' :
		alert ('itu makanan yg kin gasuka ya')
	default :
		alert ('tebakan anda salahhh')
}

