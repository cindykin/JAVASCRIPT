//preventDefault + Event Bubbling

/*
//casenya, dimana tombolx ini tagnya a, hyperlink yg mengarahkan kehalaman lain. Bila tidak ingin kehalaman manapun maka kita bisa kosongkan tujuan halamannya. Tapi jika dikosongkan dia akan kembali kehalaman itu sendiri dan page nya akan direfresh.
//Jadi disini kita akan mencegah a melakukan aksi defaultnya yaitu mengarahkan kehal lain/merefresh page

const tombolxs = document.querySelectorAll('.close');
tombolxs.forEach(function(tombolx){
	tombolx.addEventListener('click', function(o){
		o.target.parentElement.style.display = 'none';
		//cegah aksi link dari tag a
		o.preventDefault();
	})
})


//contoh pemahaman dasar event Bubbling

//ini cth penambahan event pada .card, dimana didalam card ada tombol x yg juga kita kasih event hapus
//jadi event akan dijalankan dari event elemen terluar terlebih dahulu, baru stlh itu akan menjalan event yg didalamnya
//spt kayak bubble punya bubble didalamnya. saat kita mau memecahkan bubble yg paling dalam, kita pasti harus memecahkan bubble yg ada dipaling luar terlebih dahulu. Baru bubble didalamnya bisa ikut pecah

const boxs = document.querySelectorAll('.card');
boxs.forEach(function(box){
	box.addEventListener('click', function(o){
		console.log(o); //o akan menangkap apa saja elemen yg kita klik
		//jadi saat kita ingin menghapus card dgn mengklik tombolx maka, alert ini akan muncul trlebih dulu, lalu baru card terhapus
		alert('bubbly boo!');
	})
})
*/

//contoh impelementasi

//kita tngkap elemen terluar bubble
const cntainer = document.querySelector('.container');
//jika terdapat sesuatu yg dklik diarea kontainer, jalankan fungsi brkt
cntainer.addEventListener('click', function(o){
	//tangkap tombolx. Jika ssuatu yg diklik itu nama kelasnya close, jalankan fungsi brkt
	if(o.target.className == 'close'){
		//tangkap parentElementnya (.card), lalu beri style none saat tombolx diklik
		o.target.parentElement.style.display = 'none';
	}
})