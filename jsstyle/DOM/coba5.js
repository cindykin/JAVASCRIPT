//DOM TRAVERSAL

//karna sy ga ngerti mksd next.js, gw mw coba ketik ulang lagi maksud dari next.js

//cara 1 - pure event listener
const box = document.querySelectorAll('.card');
const tombolx = document.querySelectorAll('.close');

console.log(tombolx);
//kita lakukan perulangan utk setiap .close(tombolx) yang ada
//kita harus dapat hasil dari perulangan spt ini
// urutan tombolx ke - 0
// tombolx[0]; tombolx[1]


/*
for(let i = 0; i < tombolx.length; i++){
//hasil dari for
//i = 0; 0 < 4; i = 0 + 1     i cuma simbol angka saja, utk membantu kita mengatur index array
//i = 1; 1 < 4; i = 1 + 1
	tombolx[i].addEventListener('click', function(){
	// tombolx[0].addEventListener('click', function(){
	//saat tombol dgn index ke 0 diklik jalankan fungsi berikut
		box[i].style.display = 'none';
		// box[0].style.display = 'none';
		//ambil box dengan index ke 0 lalu ubah tampilannya menjadi none
	})
}
*/






















//cara 2 - semi traversal dibagian akhir
/*
for(let i = 0; i < tombolx.length; i++){
	tombolx[i].addEventListener('click', function(){
		tombolx[i].parentElement.style.display = 'none';
		//kita cari parentelement dari tombolx[0], dmn tombolx disini mempunyai parent tag div class container
		//parentnya = div .container(box yg tdi kita tangkap), kasih style dgn display none
	})
}
*/




















//cara 3 - traversal
/*
for( let i = 0; i < tombolx.length; i++){
	tombolx[i].addEventListener('click', function(occur) {  //parameter occur ini bebas namanya. Tapi disini sy ingin memberi nama paramtr event karna event paling cocok menggambarkan situasi saat diklik terjadi apa, tp occur == event. kata event sdh byk digunakan selama ini jadi sy mengambil kata occur


		// jika ingin lihat isi dari occur(isinya adalah event yg terjadi pada saat tombolx diklik) -> console.log(occur);
		occur.target.parentElement.style.display = 'none';
		//yg kita ambil cuma method target yg isinya tag span dgn class close(tombolx kita) -> console.log(occur.target);

		
		//=> lalu kita tambahkan method dom traversal parentElement = yg akan menangkap parent dari elemen target. 
		//=> disini elemen target kita tag span .close, parent dari .close adalah tag div .container
		//=> lalu manip parent elemen .close menjadi display none saat tombolx diklik
		
	})
}
*/




















//cara 4 - traversal

//basic dari foreach
// tombolx.forEach(function(isiTombolx){
// 	console.log(isiTombolx);
// })

/*
tombolx.forEach(function(isiTombolx){
	isiTombolx.addEventListener('click', function(occur){
		occur.target.parentElement.style.display = 'none';
	})
})

//apa perbedaan pake occur sm nggak ? TOLONG DICERMATI

tombolx.forEach(function(isiTombolx){
	isiTombolx.addEventListener('click', function(){
		isiTombolx.parentElement.style.display = 'none';
	})
})
*/

//setelah sy pikirkan kembali dihari kedua ternyata isi parameter occur.target == isiTombolx, jadi sebenarnya kedudukan occur disini untuk menggantikan var isiTombolx. Nilai occur.target == isiTombolx, artinya SAMA NILAINYA, tidak ada yg berbeda !!
//bedanya cuma darimana var itu diambil ! dan lebih tepat memakai occur.target, karna langsung merujuk ke obj yg dituju






//METHOD DOM TRAVERSAL
//node = enter, spasi ikut diambil
//element = enter, spasi tidak diambil

//disini target eksperimen kita adalah tag span dgn class nama
//tangkap target
const target = document.querySelector('.nama');





//parentElement => element, menangkap parent dari elemen target. Dimana elemen target .nama adlh tag div .card
console.log(target.parentElement);

//parentNode => node,
console.log(target.parentNode);





//nextElementSibling => element, menangkap adik/elemen dibawahnya/setelahnya
console.log(target.nextElementSibling);

//nextSibling => node
//hasilnya pasti enter, karna setelah tag span ada enter lalu baru ada tag span lagi dibawahnya, karna itu kita akan mengambil node setelah enter. Baru kita bisa mendapatkan adik elemennya
console.log(target.nextSibling.nextSibling);





//previousElementSibling => element, menangkap kakak/elemen diatasnya/sebelumnya
console.log(target.previousElementSibling);

//previousSibling => node
console.log(target.previousSibling.previousSibling);