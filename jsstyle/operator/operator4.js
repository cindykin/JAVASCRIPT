// OPERATOR LOGIKA

// OPERASI UTK NILAI BOOLEAN YG OUTPUTNYA PASTI BOOLEAN

var a = true;
var b = false;



// && => AND, BERNILAI TRUE = KEDUA NILAI (HARUS) BERNILAI TRUE
var logict = a && a;
var logicf = a && b;
document.write('logika &&/and : <br>');
document.write(logict, ' = jika ', a, ' && ', a, '<br>');
document.write(logicf, ' = jika ', a, ' && ', b, '<br><br>');



// || => OR, BERNILAI TRUE = SALAH SATU NILAI BERNILAI TRUE
var logict = a || b;
document.write('logika ||/or : <br>');
document.write(logict, ' = jika ', a, ' || ', b, '<br><br>');



// ! => NOT, BERNILAI TRUE JIKA NILAINYA BERNILAI FALSE, KEBALIKAN DARI HASIL YG SEBENARNYA
var logict = !b;
var logicf = !a; 
document.write('logika !/not : <br>');
document.write(logict, ' = jika !', b, '<br>');
document.write(logicf, ' = jika !', a, '<br>');
