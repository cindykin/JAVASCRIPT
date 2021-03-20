// OPERATOR INCREMENT/DECREMENT

// KHUSUS MENAMBAH/MENGURANGI NILAI VAR DENGAN 1
let a = 10;
document.write('awalnya nilai a adalah '+ a +'<br><br>');


document.write('(a++) => a = a + 1 <br>');
document.write('(a--) => a = a - 1 <br><br>');






// a++ = kirim dulu nilai a, lalu tambah nilai a sebyk 1 (post-increment)
document.write('(a++) kirim dulu a = ', a++ ,'<br>');
document.write('baru tambah nilai a = ' + a + '<br>');



// ++a = tambah dulu nilai a sebyk 1, lalu kirim nilai a (pre-increment)
document.write('(++a) tambah dulu a = ', ++a ,'<br>');
document.write('baru kirim nilai a = ' + a + '<br><br>');












// a-- = kirim dlu a, lalu kurangi a (post)
document.write('(a--) kirim dulu a = ', a-- ,'<br>');
document.write('baru kurangi nilai a = ' + a + '<br>');

// --a = kurangi dlu a, lalu kirim a (pre)
document.write('(--a) kurangi dulu a = ', --a ,'<br>');
document.write('baru kirim nilai a = ' + a + '<br>');
