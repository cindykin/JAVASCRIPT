let square = (id = false) => {
    let side = document.querySelector('#side-square').value;
    if (id === 'area') {
        return document.querySelector('#result-square').innerHTML = `Area = ${Math.pow(side, 2)}`;
    }

    return document.querySelector('#result-square').innerHTML = `Perimeter = ${4 * side}`;
}



let rect = (id = false) => {
    let length = parseInt(document.querySelector('#length-rect').value);
    let width = parseInt(document.querySelector('#width-rect').value);
    if (id === 'area') {
        return document.querySelector('#result-rect').innerHTML = `Area = ${length * width}`;
    }
    return document.querySelector('#result-rect').innerHTML = `Perimeter = ${2 * (length + width)}`;
}



let tri = (id = false) => {
    let a = parseInt(document.querySelector('#s1-tri').value);
    let t = parseInt(document.querySelector('#s2-tri').value);
    let m = parseInt(document.querySelector('#s3-tri').value);
    if (id === 'area') {
        return document.querySelector('#result-tri').innerHTML = `Area = ${a * t/2}`;
    }
    return document.querySelector('#result-tri').innerHTML = `Perimeter = ${a + t + m}`;
}


let circle = (id = false) => {
    let r = document.querySelector('#r-circle').value;
    if (id === 'area') {
        return document.querySelector('#result-circle').innerHTML = `Area = ${Math.PI * Math.pow(r, 2)}`;
    }
    return document.querySelector('#result-circle').innerHTML = `Perimeter = ${2 * Math.PI * r}`;
    // boleh ditambah math.round jika ingin bulat tanpa koma
}