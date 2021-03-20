//looping

//while
var eksperimen = 1;
while (eksperimen < 10 ) {
	console.log('percobaan ke ' + eksperimen + 'kali');
	eksperimen++; //increment tidak boleh berad diluar while
//eksperimen = eksperimen + 1					
					//karna akan membuat state infinity looping
					//karna selama eksperimen kurang dari 10
					//perintah while akan terus berjalan
};















//for
//lebih singkat dibanding while
//nilai awal; kondisi; increment/decrement
for (a = 10; a >= 1; a--) {
	console.log ('haloo' + a);
};














//do while
//aku lupa gmn cr impelementasiny, tp teorinya
//perintah do bakal dijalankan 1x mau kondisinya true/false















//foreach
//pengulangan utk array, klo foreach,
//data ditambah sebanyak apapun nilainya akan berganti
//sesuai dengan isi array
var abc = ['a', 'b', 'c'];
for(i = 0; i < abc.length; i++) {
	document.write (i + ". " + abc[i] + "<br>")
}


abc.forEach(function (e){
	console.log (e);
})


abc.forEach(function (e, i){
	console.log ('abjad yang ' + (i+1) + ' adalah ' + e)
})























//EXPERIMENT ZONE


var nilaiAwal = 3;
var nilaiPermintaan = 10;
for (nilaiAwal; nilaiAwal < nilaiPermintaan; nilaiAwal++;) {
	document.write ('swadikhap' + nilaiAwal + ' x');
}

for ( a = 3; a < 10; a++) {
	alert('hehe');
}





//contoh kondisi infinity looping
var nilaiAwal = 8;
var nilaiPermintaan = 10;
//karna yang dicek 5 < 10 terus menerus & menghsilkan kondisi true terus menerus
//artinya program didalam while akan terus dijalankan sampai
//kondisinya bernilai false maka diperlukan increment/decrement
while (nilaiAwal < nilaiPermintaan) { //cek kondisi apabila 5 < 10 == tru cetak lagi
	//lalu cek lagi 5 < 10 == true, lalu cetak lgi tulisan ini
	console.log('cetak tulisan ini sebanyak' + nilaiAwal); //cetak tulisan ini 
} //lalu kembali lagi ke while diatas



//jadi perlu ditambahkan increment sbg brikut
var nilaiAwal = 5;
var nilaiPermintaan = 10;
//karna yang dicek 5 < 10 terus menerus & menghsilkan kondisi true terus menerus
//artinya program didalam while akan terus dijalankan sampai
//kondisinya bernilai false maka diperlukan increment/decrement
while (nilaiAwal < nilaiPermintaan) { //cek kondisi apabila 5 < 10 == tru cetak lagi
	//lalu cek lagi 5 < 10 == true, lalu cetak lgi tulisan ini
	console.log('cetak tulisan ini sebanyak' + nilaiAwal); //cetak tulisan ini 
	nilaiAwal++;
}