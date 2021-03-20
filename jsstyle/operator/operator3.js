// OPERATOR PERBANDINGAN 2 NILAI

// membandingkan 2 nilai tanpa memandang tipe data, kecuali (===, !==)
// OUTPUTNYA PASTI NILAI BOOLEAN TRUE/FALSE

var me = 10;
var you = 5;


// (>) -> LEBIH BESAR
var end = me > you;
document.write(me + ' > ' + you + ' = ' + end + '<br>');

// (<) -> LEBIH KECIL
var end = me < you;
document.write(me, ' < ', you, ' = ', end, '<br>');













//eumm new var bekos beda perilaku
var string = "8";
var int = 8;


// (>=) -> LEBIH BESAR SAMADENGAN
var end = string >= int;
document.write(string, ' >= ', int, ' = ', end, '<br>');

// (<=) -> LEBIH KECIL SAMADENGAN
var end = string <= int;
document.write(string, ' <= ', int, ' = ', end, '<br>');








// (==) -> membandingkan tanpa mengenal tipe data, SAMA DENGAN AJA
var spc = string == int;
document.write(string, ' == ', int, ' = ', spc, '<br>');

// (===) -> membandingkan smpe ke tipe data, SAMA DENGAN PAKE BANGET
var spc = string === int;
document.write(string, ' === ', int, ' = ', spc, '<br>');






// (!=) -> (KEBALIKAN DARI ==) TIDAK SAMA DENGAN AJA 
var spc = string != int;
document.write(string, ' != ', int, ' = ', spc, '<br>');

// (!==) -> (KEBALIKAN DARI ===) TIDAK SAMA DENGAN PAKE BANGET
var spc = string !== int;
document.write(string, ' !== ', int, ' = ', spc, '<br>');