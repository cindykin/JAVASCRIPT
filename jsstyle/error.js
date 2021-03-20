// try : uji blok kode didlmnya utk menemukan error
// catch : menangani error
// throw : buat custom error
// finally : akan mengeksekusi kode didalamnya stlh try/catch/apapun hasilny
// https://www.w3schools.com/js/js_errors.asp



// pasangan try catch misal aku salah ketik
try {
    alort('hehe');
} catch(err) {
    document.write(err.name); //jika penasaran errornya bisa ditambah .name
}


// ini aku bener
/*
try {
    alert('ereere');
} catch (err) {
    document.write('kalo tampil aneh haha');
}

*/

var valid = prompt('validasi umur remaja, silahkan masukkan umur anda', '17');

try {
    if(valid == "") throw 'diisi qaqa';
    if(isNaN(valid)) throw 'jgn diisi selain angka qaqa';
    if(valid < 17) throw 'masi bocah gabole masuk';
    if(valid > 21) throw 'ketuaan gabole masuk';
}

catch(err) {
    document.write('Maaf ya ' + err);
}
