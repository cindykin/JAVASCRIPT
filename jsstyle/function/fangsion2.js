/* disini aku g bahas tntng function kyknya.
aku cuma mau memperjelas sikeyword RETURN yg ada didlm function 

pas function ketemu return dr yg aku denger function bakal stop ditempat return berada.
tapi ya ga sepenuhnya bener/salah.

ternyata return itu cuma mengembalikan/memberi hasil akhir dr function tersebut
kan biasa gini
*/ 

function haha () {
	alert ('apa lo');
}

// abis tu dipanggil
// ga reusable nilainya karna udah ada si3 beradek, jadi klo mau buat itung2an jadi ga guna kwkkw
haha();








// kalo pake return gini
function hihi () {
	return 'apa lo'; // disini apa lo nilainya, jadi bisa ditampilin dalem bentuk apapun y gais
}

// dipanggil
// klo ga pke kurung, yg ditampilkan dialert = isi functionnya
console.log(hihi());
document.write(hihi());
alert(hihi());

/*
bukan sih.. return itu mengembalikan nilai, jdi klo kit amau buat program kayak itung2 gitu enakan pake return
return itu nilainya bisa di re usable, jadi bisa digunakan berkali2
dibanding kamu pake alert, console.log, document.write. kalo kamu cuma butuh nilainya doang harus pake return baru nanti hasil functionnya dijalanin pake 3 beradek itu




jadi klo lu mau buat yg nilainya reusable sebaiknya pke return
tpi klo mau buat yg nilainya cuma sekali aja dipake, ato cuma tinggal dlm function itu mendingan langsung dimasukin kedalem method 3 beradek itu
*/