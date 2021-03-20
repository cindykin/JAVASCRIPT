// 8.1 fungsi spread operator



// COMBINE ARRAYS
const noun = ['tree', 'bicycle', 'cornflakes'];
const verb = ['glide', 'sprint', 'punch'];

// spread ope
console.log([...verb, 'bisa nyelipkan sesuatu', ...noun]);


// concat
console.log(verb.concat(noun));

// arr in arr but false haha
// console.log([noun, verb]);




// COPY ARRAY
// array master
console.log(noun);

// array copy tidak mempengaruhi array master
const nouncopy = [...noun];
nouncopy[0] = 'monster';
console.log(nouncopy);








// CONVERT NODe LIST - ARRAY
const nodeli = document.querySelectorAll('li');

// cara lama
// let lists = [];
// for(i = 0; i < nodeli.length; i++) {
//     // lists += nodeli[i].textContent; bukan array
//     lists.push(nodeli[i].textContent);
// }



// spread ope
let lists = [...nodeli].map(n => n.textContent);
console.log(lists);

// aslinya
// let lists = nodeli.map(function(n) {     nodeli-diconvert-ke-array-pake-spread-ope
//     return n.textContent;
// })






















// LATIHAN ANIMASI PER WORD
const title = document.querySelector('.title');
const word = [...title.textContent].map(w => `<span>${w}</span>`).join('');
title.innerHTML = word;

