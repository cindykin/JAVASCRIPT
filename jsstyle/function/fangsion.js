fangsion ad 2 tipe deklarasi : function declaration (tidak ush disimpan dlm var langsung buat saja) & ekspression (harus disimpan dlm var trlbh dulu)


// ini namanya function declaration
function V2Kubus(a,b) {

	total = a*a*a + b*b*b;
	// total = 8*8*8 + 9*9*9 = 1241
	// total = 1241

	return total; //mengembalikan nilai total
	//alias function diatas
	//memberikan hasil akhir angka = 1241
}

//pemanggilan fungsi dengan mengisikan argumen utk parameter
console.log(V2Kubus(8,9));