// 7
// for of = iterable things
// for in = property of object








// ARRAY
const animals = ['panda', 'fish', 'bird'];



// for
for(let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// foreach
animals.forEach(function(a) {
    console.log(a);
})

// versi arrow
animals.forEach( animal => console.log(animal));

// for of
for(animal of animals) {
    console.log(animal);
}









// STRING
const name = 'Wisnu';


// for of
for(const n of name) {
    console.log(n);
}







// NODELIST
const list = document.querySelectorAll('li');


// foreach
list.forEach(li => console.log(li.innerText));

// for of
for(const li of list) {
    console.log(li.innerText);
}






// ARGUMENTS

function sumAll() {
    let boxs = 0;
    // for of
    for(box of arguments) {
        boxs += box;
        // boxs = boxs + box
    }
    return boxs;
}

console.log(sumAll(5,8,9,10));



// OBJECT
// tidak bisa pake for of
const genshin = {
    tipe : 'game',
    gacha : 'ampas',
    hobi : 'php-in anak orang',
    kesimpulan : 'bakar mihoyo'
}

for (g in genshin) {
    console.log(g);  // return nama property
    console.log(genshin[g]);  // return isi property
}