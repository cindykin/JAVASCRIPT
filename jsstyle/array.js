//membuat array literal
var erere = ['bebas', 8, true]; //btw index array dimulai dari 0

//menampilkan seluruh isi array
console.log(erere);

//menampilkan slh satu isi array
console.log(erere[1]); 

//menghapus isi array tidak recommendit
// erere[2] = undefined;
// console.log(erere);

//ganti salah satu elemen array
erere[0] = 'apasih';

//menampilkan galo2 isi array pke caro keren
for(var i = 0; i < erere.length; i++) {
	console.log (erere[i]);
}

//keren++
for (var x = 0; x < erere.length; x++) {
	console.log('daftar agaigik ' + (x+1) + ': ' + erere[x]);
}
























//METHOD EREI 
// cek disini https://www.w3schools.com/jsref/jsref_obj_array.asp

//LENGTH : mengcounting jumlah elemen array
erere.length; // hasil = 3

//JOIN : menkonversi array mjd string + bs nambah separator (lookalike toString) 
console.log(erere.join(' - '));

//PUSH : menambah elemen terakhir array
erere.push('biso banyak', 'msuki elemen apo be'); //1 x push buat tambah 1 elemen
console.log(erere.join(' - '));

//POP : menghapus elemen terakhir array
erere.pop(); //1 x pop buat hilangin 1 elemen
erere.pop();
console.log(erere.join(' - '));



//UNSHIFT : menambah elemen diposisi 0/pertama array
erere.unshift('bwaa aku didepan');
console.log(erere.join(' - '));

//SHIFT : menghapus elemen pertama array (lookalike pop)
erere.shift();
console.log(erere.join(' - '));



//SPLICE : bisa menambahkan/menghapus ditengah2 elemen array
//splice(index tujuan target ditaruh/start dihapus, nakDihapusBrp, elemenbaru1, elemenbaru2, dst);

//ini contoh tidak dihapus, cuma memasukkan elemen
erere.splice(1, 0, 'aku ada diindex ke 1 dongg', 'aku ke2 dongg');
console.log(erere.join(' - '));

//ini contoh dihapus lalu langsung ditambah elemen
//splice return elemen yg telah dihapus
var ygdihapus = erere.splice(0, 3, 'aku bisa masuk juga dongg');
console.log(erere.join(' - '));



//SLICE : menghasilkan array baru. dgn cara mencopy elemen target dari array sebelumnya lalu diubah mjd array baru 
//slice(indextargetawal, indextargetakhir +1)
var ererenojutsu = erere.slice(1,3);
console.log(ererenojutsu.join(' - '));

//CONCAT : menciptakan array baru dgn gabungkan array yg sdh ada (tidak mengubah array yg ada, selalu return array baru)
var cowo = ['tsuki', 'brandon'];
var cewe = ['shiro', 'ellie'];
var parent = ['harley', 'maroon'];

var coce = cowo.concat(cewe);
console.log(coce.join(' - '));

var fam = parent.concat(cowo, cewe);

//jg bisa mengubah nilai string jadi array
var fam2 = parent.concat('shilvey'); //returnnya kyk toString

//TOSTRING : konversi array jadi string (yg dipisahkan oleh koma)
erere.toString();