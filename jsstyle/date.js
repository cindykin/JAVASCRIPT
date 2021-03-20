// nampili tanggal dalam js https://www.w3schools.com/js/js_date_methods.asp

var tanggal = new Date();
var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Noveember', 'Desember'];
var hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

var tahun = tanggal.getFullYear();
var bln = tanggal.getMonth();
var hri = tanggal.getDay();
var tgl = tanggal.getDate();


var jam = tanggal.getHours();
var menit = tanggal.getMinutes();

document.write('Sekarang tanggal ')
document.write(hari[hri] + ", " + tgl + " " + bulan[bln] + " " + tahun);

document.write('<br>Sekarang jam ')
document.write(jam + ' : ' + menit);