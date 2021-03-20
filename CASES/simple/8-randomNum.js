


let getRandom = () => {
    let start = parseInt(document.querySelector('#start').value);
    let end = parseInt(document.querySelector('#end').value);
    let randomNum = Math.floor( (Math.random() * (end - start) ) + start );
    

    return document.querySelector('#result').innerHTML = randomNum;
}