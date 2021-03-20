// split = dipecah berdasarkan spasi
// toUpperCase = jadi huruf kapital
// substr = mengambil huruf dengan index ke-x
    // substr(1, 3) = uic
// join = menggabungkan elemen array dengan <spasi> jadi string




let sesuatu = prompt('Masukkan kalimat yang ingin disulap : ');

let capitalize = ((string) => {

    // let string = "quick jumping brown"; contoh

    string = string.split(' ');     // quick,jumping,brown

    // untuk setiap kata
    for(let i = 0; i < string.length; i++) {
        // string[0] = quick, string[1] = jumping
        // string[0][0].upcase = Q
        // string[0].substr(1) = uick
        string[i] = string[i][0].toUpperCase() + string[i].substr(1);

        // console.log(string[i]);
    }

    // ['Quick','Jumping','Brown']

    return string.join(' ') // Quick Jumping Brown
})


document.write(`<h1>Hasilnya : ${capitalize(sesuatu)}</h1>`);