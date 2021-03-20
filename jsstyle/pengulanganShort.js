
//statement looping biasa hasil harus 5x berturut2

let n = 0;
while(n < 5){
	console.log('ehhe while' + (n+1) + 'x');
	n++;
}

for(let ix = 1; ix <= 5; ix++){
	console.log('for atuuh, simbol mulu, ' + ix);
}


//statement looping array hasil harus tampil utk setiap isi array, walau isinya ditambah perintah statement akan berjalan spt biasa

let errei = [false, 'apa lu', 8910];

for(let i = 0; i < errei.length; i++) {
	console.log('for bisa nampilin array jg nih : \n' + errei[i]);
}


//mirip kyk function traversal, dieventlistener
errei.forEach(function(isiArray, index){
	console.log('halo ini forEach dengan isi errei : \n ' +  isiArray + ' dengan index ke ' + index);
})