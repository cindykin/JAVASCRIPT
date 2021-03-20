// 8.2 fungsi rest param



function test(a, b , ...other) {
    return `a = ${a} \n b = ${b} \n other = ${other}`
}
console.log(test(1,2,3,4,5));











let sumAll = (...numbers) => {
    let total = 0;
//     for(let i = 0; i < numbers.length; i++) {
//         total += numbers[i]
//     }
    for(number of numbers) {
        total += number;
    }
    return total;

    // return numbers.reduce((a,b)=>a+b); reduce 
}

console.log(sumAll(1,2,3,4,5));









// ARRAY DESCTUCTURING

const members = ['Jean', 'Diluc', 'Diona', 'Bennett', 'Noelle'];
const authority = [leader, mentor, ...member] = members;
console.log(member);







// OBJECT DESCTUCTURING
const team = {
    manager: 'Xiangling',
    frontEnd: 'Chongyun',
    backEnd: 'Keqing',
    UX: 'Klee'   
}

const {manager, ...myteam} = team;
console.log(myteam);







// FILTERING
function filterBy(type, ...values){
    return values.filter(value => typeof value === type); 
}

console.log(filterBy('string', 'Klee', 'Xinyan', 'Childe', false, 90));