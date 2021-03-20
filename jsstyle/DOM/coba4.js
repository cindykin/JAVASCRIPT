//DOM EVENT

//tangkap elemen target
var titulo = document.querySelector('#judul');

//event handler
titulo.onclick = function(){
	titulo.style.color = 'grey';
}

//event listener
//cra cek apa benar objek target telah tertangkap
titulo.addEventListener('click', function(){
	alert('ok');
})

titulo.addEventListener('click', function(){
	titulo.style.backgroundColor = 'black';
})





//w ingin coba buat elemen h2 yg textnya tambah paragraf yg saat elemennya diklik akan menambah paragraf baru dibawah paragraf 3

//BUAT ELEMEN DULU

//tangkap rumah tempat tinggal elemen h2 baru
var rumahH2 = document.querySelector('section#a');
//tangkap paragraf 1 spy letak h2 ada diatas paragraf 1
var p1 = rumahH2.querySelector('.p1');

//buat elemen h2 baru seblum paragraf 1
var h2 = document.createElement('h2');
var isiH2 = document.createTextNode('Klik untuk Tambah Paragraf !');
h2.appendChild(isiH2);

//masukkan h2
rumahH2.insertBefore(h2, p1);



//ADD EVENT LISTENER

//tangkap elemen target yg saat diklik melakukan fungsi
var targetH2 = document.getElementsByTagName('h2')[0];

//buat perintah tambah elemen yg akan dilakukan pada saat elemen target diklik
targetH2.addEventListener('click', function(){
	var pNew = document.createElement('p');
	var isiPNew = document.createTextNode('paragraf baru !');
	pNew.appendChild(isiPNew);
	//masukkan elemen baru ke rumahnya jadikan anak terakhir
	rumahH2.appendChild(pNew);
})


