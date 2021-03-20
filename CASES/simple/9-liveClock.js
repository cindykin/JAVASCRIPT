const show = () => {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()


    let id = "AM"
    if (hours>12){
        id = "PM";
        hours = hours-12
        if (hours==0) {
            hours = 12
        }
    }

    if (minutes < 10) minutes = '0' + minutes
    if (seconds < 10) seconds = '0' + seconds    

    document.querySelector('#clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${id}`

}

setInterval(show, 1000)