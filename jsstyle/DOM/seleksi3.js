//DOM EVENT
//event handler tidak recom

//tangkap elemen yg ingin dimanipulasi
var p3 = document.querySelector('.p3');

//buat function yang berisi perintah manipulasi
function ubahColor() {
	p3.style.backgroundColor = 'grey';
}

//tambahkan event click, maka saat diclick akan jalankan fungsi ubah warna
p3.onclick = ubahColor;





//add event listener
//cth ini ketika elemen paragraf 4 diklik akan membuat elemen item baru

//tangkap elemen yg ingin dimanip
var p4 = document.querySelector('section#b p');
//buat function bila elemen ditargetkan dimanip tadi diklik jalankan fungsi yg berisi perintah berikut
p4.addEventListener('click', function () {
	// alert('ok');
	//tangkap rumah tempat elemen baru akan ditaruh
	var ul = document.querySelector('section#b ul');
	//buat elemen serta isi nya
	var item = document.createElement('li');
	var isitem = document.createTextNode('item baru !');
	item.appendChild(isitem);
	//masukkan elemen baru kedalam rumah tadi
	ul.appendChild(item);
})




//jika event handler fungsi lama akan ditimpa oleh fungsi yg baru, dan fungsi yang lama tidak akan dijalankan
var p2 = document.querySelector('.p2');
// p2.onclick = function() {
// 	p2.style.backgroundColor = 'blue';
// }
// p2.onclick = function() {
// 	p2.style.color = 'red';
// }


//jika event listener fungsi yg lama tdk akan ditimpa tapi ditambah dijalankan spt biasa
p2.addEventListener('click', function(){
	p2.style.backgroundColor = 'blue';
})
p2.addEventListener('click', function(){
	p2.style.color = 'white';
})