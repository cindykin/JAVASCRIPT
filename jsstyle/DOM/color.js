//case 1 ubah warna scr sdrhana
const tUbah = document.getElementById('tombol');
//const body = document.getElementsByTagName('body')[0]; == document.body

tUbah.addEventListener('click', function(o){
	// document.body.style.backgroundColor = 'blue';
	// document.body.setAttribute('class', 'warnabiru');
	document.body.classList.toggle('warnabiru');
})



//case 2 ketika diklik warna background akan berubah scr random
const tRandom = document.createElement('button');
const isiTRandom = document.createTextNode('RandomiZe');
tRandom.appendChild(isiTRandom);
tRandom.setAttribute('type', 'button');
tUbah.after(tRandom);

tRandom.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})


//bermain dgn slider

const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');

sRed.addEventListener('input', function(){
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sGreen.addEventListener('input', function(){
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sBlue.addEventListener('input', function(){
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})