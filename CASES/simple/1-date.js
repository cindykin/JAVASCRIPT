document.write('untuk jamnya belum bisa real time/live time :)');
// Date = obj js menampilkan data tanggal & waktu
// getXxx = method dari obj Date



const area = document.querySelector('.test-area');

const d = new Date();




// displaying date

const date = d.getDate();
const year = d.getFullYear();

// using array
const month = ["January", "February", "March", "April", "Mei", "June", "July", "August", "September", "October", "November", "December"];

// using switch
switch(day = d.getDay()) {
    case 0:
        day = "Sunday"
        break;
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6: 
        day = "Saturday"
        break;
}

area.innerHTML = `Today is ${day}, ${date} ${month[d.getMonth()]} ${year} <br>`;







// displaying time
const h = d.getHours();
const m = d.getMinutes();
const s = d.getSeconds();

area.innerHTML += `It's ${h} : ${m} : ${s}`;