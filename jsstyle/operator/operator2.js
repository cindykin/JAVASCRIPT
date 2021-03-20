// OPERATOR PENUGASAN/ASSIGNMENT

// basicny trnyt sm sj spt aritmatika. tp Aritmatika = hanya melakukan operasi aritmatika saja
//kalau Assignment = melakukan operasi aritmatika beserta pengisian(mengganti nilai awal dgn hasil dari operasi aritmatika)

document.write('pada awalnya nilai score adalah ... <br>');


// PENGISIAN NILAI
let score = 100;
document.write('score = ' + score + '<br>');

// PENGISIAN & PENAMBAHAN
score += 5;
document.write('(score += 5) => score = score + 5 <br>');
document.write('score = ' + score + '<br>');

// PENGISIAN & PENGURANGAN
score -= 5;
document.write('(score -= 5) => score = score - 5 <br>');
document.write('score = ' + score + '<br>');

// PENGISIAN & PERKALIAN
score *= 5;
document.write('(score *= 5) => score = score x 5 <br>');
document.write('score = ' + score + '<br>');

// PENGISIAN & PEMBAGIAN
score /= 5;
document.write('(score /= 5) => score = score : 5 <br>');
document.write('score = ' + score + '<br>');

// PENGISIAN & PERPANGKATAN
score **= 5;
document.write('(score **= 5) => score = score pangkat 5 <br>');
document.write('score = ' + score + '<br>');

// PENGISIAN & SISA BAGI
score %= 2;
document.write('(score %= 2) => sisa bagi dari -> score : 2 = score <br>');
document.write('score = ' + score + '<br>');