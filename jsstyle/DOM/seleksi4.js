//DOM TRAVERSAL

//coba hapus buletin saat diklik tombol x
//pke event listener
//cara 1
// const buletin = document.querySelector('.card');
// const tombolx = document.querySelector('.close');

// tombolx.addEventListener('click', function(){
// 	buletin.style.display = 'none';
// })


//cara 2
// const buletin = document.querySelectorAll('.card');
// const tombolx = document.querySelectorAll('.close');

// for( let i = 0; i < tombolx.length; i++){
// 	tombolx[i].addEventListener('click', function() {
// 		alert('tombol ke ' + (i+1) + 'telah terhapus')
// 		buletin[i].style.display = 'none';
// 	})
// }




//cara DOM Travesal

//cara 1 semi-traversal
const buletin = document.querySelectorAll('.card');
const tombolx = document.querySelectorAll('.close');

for( let i = 0; i < tombolx.length; i++){
	tombolx[i].addEventListener('click', function(e) {
		// tombolx[i].parentElement.style.display = 'none';

		//e = event yg terjadi pda saat tmbolx diklik
		//console.log(e);
		//console.log(e.target);
		e.target.parentElement.style.display = 'none';
	})
}




//cara 2
tombolx.forEach(function(element) {
	element.addEventListener('click', function(e) {
		e.target.parentElement.style.display = 'none';
	})
})













//Method DOM Traversal

const name = document.querySelector('.nama');
console.log(name.parentElement);
console.log(name.parentNode);
console.log(name.parentElement.parentElement);
console.log(name.nextSibling); //enter akan ikut dianggap sbg node
console.log(name.ElementSibling);
console.log(name.previousElementSibling);
console.log(name.nextElementSibling.nextElementSibling);