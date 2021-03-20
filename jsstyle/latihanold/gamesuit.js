var tanya = true;
while (tanya) {



//menangkap pilihan player
var p = prompt('silahkan pilih jagoan anda : gunting, batu, kertas !');
//menangkap pilihan komputer
//membangkitkan angka random
var bot = Math.random() //angka random



if (bot < 0.3) {
	bot = 'kertas';
} else if (bot >= 0.3 && bot < 0.6) {
	bot = 'batu';
} else {
	bot = 'gunting';
}



var result = '';
//menentukan rules
if ( p == bot ) {
	result = 'SERI!';
} else if ( p == 'gunting' ) {
	// if (bot == batu) {
	// 	result = 'MENANG !';
	// } else {
	// 	result = 'KALAH !';
	// }
	result = (bot == 'batu') ? 'KALAH !' : 'MENANG !';
} else if (p == 'batu') {
	result = (bot == 'kertas') ? 'KALAH !' : 'MENANG !';
} else if ( p == 'kertas' ){
	result = (bot == 'gunting') ? 'KALAH !' : 'MENANG !';
} else {
	result = 'kamu mengetikkan player yang tidak disebutkan !';
}




//show result
alert ('kamu memilih -> ' + p + ', sedangkan bot memilih -> ' + bot + '\nHasilnya kamu => ' + result);

tanya = confirm ('apakah kamu ingin mencoba lagi ?');

}

alert ('terimakasih telah mencoba program sederhana saya !');