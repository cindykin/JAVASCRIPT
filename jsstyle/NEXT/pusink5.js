/* 3.1 arrow function
versi lebih singkat dari function expression


disini gw g pke return bekos hasil functionnya g dipke berulang kali ( liat si return beraksi -> fangsion2.js)


ini function declaration
*/
function tampilPesan(nama) {
	alert ('halo', nama);
}

tampilPesan('kekeyi');










// ini function expression
let tampilPesan = function (nama) {
	alert ('halo', nama);
}

tampilPesan('kekeyi');




// ini arrow function (expression)
let tampilPesan = (nama) => {
	alert ('halo', nama);
}

tampilPesan('kekeyi');














// gimme more...
const displayName = function (name) {
	return 'halo', nama;
}
console.log(displayName('huawei'));




// 1 param
const displayName = (name) => { return 'halo', nama; }
console.log(displayName('weihua'));

// implisit return jika paramnya 1
const displayName = name => 'halo', nama;
console.log(displayName('huawei'));




// 2 param
const displayName = (name, time) => {
	return 'selamat', time, name;
}
console.log(displayName('richard', 'siang'));





// klo g ad param
const displayName = () => 'helu woruldo';
console.log(displayName());















let student = ['zayn', 'lauren', 'georgie'];

let jumlahKata = student.map(function (name) {
	return name.length;
});
console.log(jumlahKata);


let jumlahKata = student.map(name => nama.length);
console.log(jumlahKata);









//klo gmw dlm bentuk errei kita ubah ke objeg
jumlahKata = mahasiswa.map(name => ({ name: name, jumlahKata: name.length }));
console.table(jumlahKata);







// btw klo mau mngmblikan obj yg nama propertynya sama dgn nama nilainya gperlu tulis 2-2nya cukup 1 aja
jumlahKata = mahasiswa.map(name => ({ name, jumlahKata: name.length }));
console.table(jumlahKata);