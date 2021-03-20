//DOM Selection + Manipulation (P1) belom kena P2

//# = id
//. = class
//<section> = tag langsung nama saja

//disini nangkap judul dgn tag = h1, no class, id = judul


//getElementById = elemen (1)
var titulo = document.getElementById('judul');
titulo.style.backgroundColor = 'lightblue';



//getElementsByTagName = HTMLCollection (lebih dari 1, mirip array)
var titulo2 = document.getElementsByTagName('h1')[0];
titulo2.classList.toggle('inijudul');



//getElementsByClassName = HTMLCollection (lebih dari 1, mirip array)
var titulo3 = document.getElementsByClassName('inijudul');
titulo3[0].style.color = 'white';



//querySelector = elemen (1)
var titulo4 = document.querySelector('#judul');
titulo4.innerHTML = 'salam querySelector kwkw !!';



//querySelectorAll = nodeList (lebih dari 1, mirip array)
var titulo5 = document.querySelectorAll('h1')[0];
titulo5.classList.add ('salam', 'querySelectorAll', 'wkkw');


document.write('getElementById = backgroundColor, getElementsByTagName = buat kelas untuk judul, getElementsByClassName = fontcolor, querySelector = innerHTML, querySelectorAll = tambah kelas utk judul')