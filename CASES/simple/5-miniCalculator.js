// nilai hanya berganti angka saat fungsi terpanggil, nilai tidak akan berubah jika disimpan diluar fungsi


let multiply = () => {
    // bisa dimasukkan kedalam var dulu
    let n1 = document.querySelector('#n1').value;
    let n2 = document.querySelector('#n2').value;
    return document.getElementById("result").innerHTML = n1 * n2;
}


let divide = () => {
    // bisa dimasukkan kedalam var dulu / langsung spt ini
    return document.getElementById("result").innerHTML = document.querySelector('#n1').value / document.querySelector('#n2').value
}