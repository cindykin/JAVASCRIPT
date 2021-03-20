

var angkotGua = 10;
var angkotSehat = 6;

for (var noAngkot = 1; noAngkot <= angkotGua; noAngkot++) {
	if (noAngkot <= 6 && noAngkot !== 5) {
		console.log ('angkot nomor ' + noAngkot + ' lagi berjalan spt biasa')
	} else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
		console.log ('angkot nomor ' + noAngkot + ' lagi lembur')
	} else {
		console.log ('angkot nomor ' + noAngkot + ' lagi diservis')
	}
}
