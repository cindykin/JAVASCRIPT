//PREVENT DEFAULT
//menghentikan aksi default yg berjalan
//disni cthny tag a link yg akan mengarahkan ke hal lain, dimana saat a dklik 1 card harus dihapus, tp disini a merefresh halamannya. Jadi kita tidak bisa menghapus cardnya, karna terus menerus saat ditekan dia merefresh. Jadi kita pakaikan method preventDefault utk mencegah aksinya merefresh halaman terus menerus

const tombols = document.querySelectorAll('.close');
tombols.forEach(function(tombol){
	tombol.addEventListener('click', function(o){
		o.target.parentElement.style.display = 'none';
		o.preventDefault();
		o.stopPropagation();
	})
})






//event bubbling
//gelembung atas pecah lalu baru gelembung didalamnya

const cards = document.querySelectorAll('.card');
cards.forEach(function(card){
	card.addEventListener('click', function(o){
		alert('bubblee');
	})
})



//cth implementasi
const container = document.querySelector('.container');
container.addEventListener('click', function(o){
	if(o.target.className == 'close'){
		o.target.parentElement.style.display = 'none';
	}
})