//Masih campuran DOM Selection + Manipulation (P1) belom kena sentuh P2

//instagram menggangu pemandangan coba hilangkan/ganti jadi paragraf
//jika diganti paragraf 2,3,4 angkanya harus disesuaikan menjadi 1,2,3,4,5
//instagram memiliki tag = a, attribute = href


//ada 2 cara untuk mengganti
//cara 1 : tangkap elemen ig pake getElementsByTagName/querySelector, lalu manipulasi tag a menggunakan method innerHTML = 'paragraf 2'
//cara 2 : tangkap elemen ig pake getElementsByTagName, lalu manipulasi tag a tambahkan class untuk ig menggunakan method classList.add('ig'), lalu tangkap kelas pake getElementsByClassName, pake method innerHTML = 'paragraf 2'



//cara 1
// var ig = document.querySelector('a');
// ig.innerHTML = 'paragraf 2';
// ig.removeAttribute ('href');


//cara 2
var ig2 = document.getElementsByTagName('a');
ig2[0].classList.add ('ig');
var ig3 = document.getElementsByClassName('ig')[0];
ig3.innerHTML = 'paragraf 2';
ig3.removeAttribute('href');

