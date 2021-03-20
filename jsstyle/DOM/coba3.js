//DOM Manip P2 (belajar buat anak kwkw)
//anak maksudnyo elemen baru ya :v


//buat badan anak, taruh selipin dibawah paragraf 
//disini saya membuat anak bertipe elemen paragraf
var bodyChild = document.createElement('p');
//buat jiwa anak untuk dimasukkan kedalam badan anak
var soulChild = document.createTextNode('anak baru !');

//satukan badan dan jiwa anak, dan jadilah anak pertama
bodyChild.appendChild(soulChild);


//tangkap rumah parent untuk tempat tinggal anak pertama
var homeChild = document.getElementById('a');

//tangkap anak bawaan yg akan jadi adek anak baru
var anakBawaan = homeChild.getElementsByClassName('p2')[0];

//tambah sesuai aturan
homeChild.insertBefore(bodyChild, anakBawaan);

//kalau mau tambah jadi anak terakhir
// homeChild.appendChild(bodyChild);



















//hapus anak, disini hapus anak yang biru sendiri yaitu a

//tangkap rumah anak yang mau dihapus
var homeChild = document.getElementById('a');

//tangkap anak yang mau dihapus
var deletedChild = homeChild.querySelector('a');

//lalu hapus anak yang mau dihapus
homeChild.removeChild(deletedChild);




















//ganti anak lama dengan anak baru

//tangkap rumah anak lama yg mau diganti
var homeChild2 = document.querySelector('section#b ul');

//tangkap anak lama yang mau diganti
var oldChild = homeChild2.querySelector('li:nth-child(3)');

//buat anak baru yang akan menggantikan posisi anak lama
var bodyChild2 = document.createElement('li');
var soulChild2 = document.createTextNode('anak yang menggantikan !');
bodyChild2.appendChild(soulChild2);

//ganti anak lama dengan anak baru
homeChild2.replaceChild(bodyChild2, oldChild);