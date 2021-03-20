//DOM Selection saja

//noderoot.getElement

//getElementById -> element

var judul = document.getElementById('judul');
//disini var judul sudah berupa objek
judul.style.color = 'white';
judul.style.backgroundColor = '#000';
judul.innerHTML = 'hehe';





//getElementsByTagName -> HTMLCollection (banyak)

var p = document.getElementsByTagName('p'); //hasilnya mirip array

//jadi kita gabisa modif kyk ini
//p.style.color = 'red'; karna hasilnya lebih dari 1

//jadi kita tangkap ke indexnya seperti ini
p[0].style.color = 'blue';
//jika ingin semua hasil kita pake looping
for (var i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'red';
}

//contoh 2 : cuma 1 yg pnya tag h1 tapi tetep hasilnya 0 dan 1, hasilnya psti selalu lebih dari 1
var h1 = document.getElementsByTagName('h1');
//atau diakali di hasil tangkapannya begini
h1[0].style.innerHTML = 'boku';

//jadi jika ingin menangkap by tagname tp hasilnya satu bisa dibeginikan
var h1 = document.getElementsByTagName('h1')[0];
h1.style.backgroundColor = 'grey';





//getElementsByClassName -> HTMLCollection

var p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'salam javascript wkwk';










//querySelector -> element
var p4 = document.querySelector ('#b p');
p4.style.color = 'purple';

var li2 = document.querySelector ('section#b ul li:nth-child(2)');
li2.style.backgroundColor = '#ccc';

//querySelector mengembalikan 1 element
//disni element p ada 4
var p = document.querySelector ('p');
p.innerHTML = 'slm js !';
//tapi yang terubah hanya element pertama yang ditemukan, itu mmbuktikan bahwa returnnya hanya 1 element saja





//querySelectorAll -> nodeList
var p = document.querySelectorAll('p'); //sama saja dgn tagname tp ini nodelist
var p = document.getElementsByTagName('p'); //ini htmlcollection

for (var i = 0; i < p.length; i++) {
	p[i].style.color = 'white';
}





// a little trick by node root
var sectionB = document.getElementById('b');
var p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'teal';

var sectionB = document.querySelector('section#b');
var p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'teal';