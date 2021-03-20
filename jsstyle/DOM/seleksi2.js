//DOM Manipulation P2

//cara tambah elemen baru

//buat elemen baru
var pNew = document.createElement('p');

//buat isi untuk elemen baru
var textPNew = document.createTextNode('paragraf NEW');

//simpan/masukkan isi elemen kedalam elemen
pNew.appendChild(textPNew);

//tangkap parent (rumah/tempat tinggal untuk elemen baru)
var sectionA = document.querySelector('#a');

//masukkan elemen baru ke dalam rumah yang sudah ditangkap tadi
sectionA.appendChild(pNew);




//cara buat elemen dan masukan ke sebelum anak ke 2

//buat elemen baru
var liNew = document.createElement('li');

//buat isi utk elemen baru
var textLiNew = document.createTextNode('item NEW');

//masukkan isi elemen ke dalam elemen baru
liNew.appendChild(textLiNew);

//cari & tangkap parent utk rumah/tempat tinggal elemen baru
var ul = document.querySelector('section#b ul');
var li2 = ul.querySelector('li:nth-child(2)');

//masukkan liNew sebelum li2(item 2)
//rumahparent.masukkansebelum(anakbaru, anakke2)
ul.insertBefore(liNew, li2);



//cara hapus elemen

//tangkap elemen yang mau dihapus
var link = document.getElementsByTagName('a')[0];

//rumah parent.removechild(elemen yang sudah ditangkap dan mau dihapus tadi)
sectionA.removeChild(link);




//cara ganti anak lama dgn anak baru

//tangkap rumah parent
var sectionB = document.querySelector('#b');
//tangkap anaklama yang mau diganti patokan dari rumah parent
var p4 = sectionB.querySelector('p');


//buat elemen dan isi elemen anak baru
var h2New = document.createElement('h2');
var textH2New = document.createTextNode('judul NEW');
//satukan dan simpan elemen anak baru
h2New.appendChild(textH2New);


//rumahparent.gantianak(anakbaru, anaklama)
sectionB.replaceChild(h2New, p4);




//bagian yang baru
pNew.style.backgroundColor = 'yellow';
liNew.style.backgroundColor = 'yellow';
h2New.style.backgroundColor = 'yellow';
