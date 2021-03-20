// 11 promise

/*
const janji = new Promise((ditepati, diingkari) => {
    if(false) {
        ditepati('janji ditepati')
    } else {
        diingkari('janji diingkari')
    }
});


// console.log(janji);

janji
    .then(respon => console.log('berhasil ! ' + respon))
    .catch(respon => console.log('gagal ! ' + respon))

*/
















const janji2 = new Promise((ditepati, diingkari) => {
    if(true){
        setTimeout(() => {
            ditepati('ditepati')
        }, 3000);
    } else {
        setTimeout(() => {
            diingkari('diingkari')
        }, 3000);
    }
})

console.log('mulai')
console.log(janji2.then(() => console.log(janji2))); // utk lihat prosesnya
janji2
    .finally(() => console.log('selesai loading, hasilnya'))
    .then(respon => console.log('berhasil ! ' + respon))
    .catch(respon => console.log('gagal ! ' + respon))
console.log('selesai')












/*

const movie = new Promise((ditepati, diingkari) => {
    setTimeout(() => {
        ditepati([{
            title : 'starwars return',
            year : '2080',
            starring : ['cindy kin', 'todd hakorn']
        }])
    }, 1000);
})

const weather = new Promise((ditepati, diingkari) => {
    setTimeout(() => {
        ditepati([{
            location : 'Monstandt',
            temp : -23
        }])
    }, 300);
})

// cara biasa
// movie.then(response => console.log(response));


// cara cepat
Promise.all([movie, weather])
    // .then(response => console.log(response));
    
    // kalo mau jadi 2 array
    .then(response => {
        const [movie, weather] = response;
        console.log(movie)
        console.log(weather)
    })


*/