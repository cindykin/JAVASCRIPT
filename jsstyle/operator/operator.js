// OPERATOR ARITMATIKA
// note : dijs kita gbs a + b = c (Invalid left-hand side in assignment), jadi harus diganti bgini c = a + b

let a = 10;
let b = 5;

// PENJUMLAHAN (+)
c = a + b
document.write(a,' + ',b,' = ',c,'<br>');

// PENGURANGAN (-)
c = a - b
document.write(a +' - '+ b +' = '+ c +'<br>');

// PERKALIAN (*)
c = a * b
document.write(a +' x '+ b +' = '+ c +'<br>');

// PEMBAGIAN (/)
c = a / b
document.write(a +' : '+ b +' = '+ c +'<br>');

// PERPANGKATAN (**)
c = a ** b
document.write(a +' pangkat '+ b +' = '+ c +'<br>');

// SISA BAGI (%) bermanfaat buat cek bil genap/ganjil. Bila dibagi 2 -> Genap = 0, Ganjil = 1
c = a % b
document.write(' sisa bagi/modulus dari ' + a +' : ' + b +' = '+ c +'<br>');





// OPERATOR (PENGABUNGAN) STRING ?

let first = ' ini ';
let second = ' STRING ';
let third = ' yha gaisu ';
let numb = "10";

//btw ak bru tau bisa pake (,) = (+) sama aja
document.write(first, second, third, '<br>');

let d = numb + a // d = "10" + 10 
document.write(d);