var fruits = ['semongko', 'apel', 'leci', 'nanas'];
var numbers = [30, 21, 55, 92, 16];

// forEach() : pemanggilan fungsi (fungsi callback) sekali utk setiap elemen array
fruits.forEach(function(fru){
    console.log(fru);
});

//bisa pake indexnya
fruits.forEach(function(fru, index){
    console.log(index+1, ' - ', fru);
});



// map() : membuat array baru dgn menjalankan fungsi pada tiap elemen array, tidak mengubah array asal
//memanggil fungsi yg disediakan sekali utk setiap elemen array scr berurutan
numbers.map(function(no){
    console.log(no * 10);
    // utk setiap elemen array kalikan 10
})



// filter() : membuat array baru dgn elemen array yg telah lulus pengujian
var adult = numbers.filter(function(age){
    return age > 25;
    // ambil elemen array yg nilainya lebih dari 25
})

console.log(adult);


// reduce() : menjalankan fungsi pada setiap elemen array untuk menghasilkan (menguranginya menjadi) satu nilai, tidak mengubah array asal, dimulai dari kiri kekanan
var test = numbers.reduce(function(nilaiawal, item) {
    return nilaiawal + item; // bisa nilaiawal - item 
})

console.log(test);



// every() : metode cek jika semua elemen array lulus syarat, return true/false
var humanAge = numbers.every(function(age){
    return age < 300;
    // cek apa semua nilai array dibawah 300tahun umur manusia
})

console.log(humanAge);



// some() : bernilai true jika satu saja elemen array memenuhi syarat (lookalike every)
var teenAge = numbers.some(function(age){
    return age < 18;
    // cek apa semua nilai array dibawah 300tahun umur manusia
})

console.log(teenAge);



// indexOf() : mencari index posisi elemen array yg dimaksud. jika ada akan bernilai index elemennya, jika tidak return -1
console.log (fruits.indexOf('semongko'));




// find() : return nilai elemen array yg pertama memenuhi syarat
var first = numbers.find(function(oldest){
    return oldest > 70;
})

console.log(first);



// findIndex() : return index elemen array yg pertama memenuhi syarat
var first = numbers.findIndex(function(oldest){
    return oldest > 70;
})

console.log(first);