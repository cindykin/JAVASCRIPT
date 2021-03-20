// 13 async await




const searchBtn = document.querySelector('.search-button');
searchBtn.addEventListener('click', async () => {
    const inputKeyword = document.querySelector('.search-input')
    const movies = await getMovies(inputKeyword.value)
    updateTampilan(movies)
})


function getMovies (keyword) {
    return fetch('http://omdbapi.com?apikey=2e1ca63e&s=' + keyword)
        .then(response => response.json())
        .then(result => result.Search);
}   

function updateTampilan(movies) {
    let cards;

    movies.forEach(m => cards += showMovie(m))
    
    const container = document.querySelector('.lat-ajax')
    container.innerHTML= cards;
}




// cara tnpa async
// document.addEventListener('click', function(e){
//     if(e.target.classList.contains('movie-modal-btn')) {
//         const imdbid = e.target.dataset.imdbid;
//         getMovie(imdbid)
//     }
// })

// function getMovie (imdbid) {
//     fetch('http://omdbapi.com?apikey=2e1ca63e&i=' + imdbid)
//         .then(response => response.json())
//         .then(m => {
//         const modalBody = document.querySelector('.modal-body')
//         modalBody.innerHTML = showMovieDetail(m)
//     })
// }

document.addEventListener('click', async function(e){
    if(e.target.classList.contains('movie-modal-btn')) {
        const imdbid = e.target.dataset.imdbid;
        const movie = await getMovie(imdbid)
        updateTampilanModal(movie)
    }
})

function getMovie (imdbid) {
    return fetch('http://omdbapi.com?apikey=2e1ca63e&i=' + imdbid)
        .then(response => response.json())
        .then(m => m)
}

function updateTampilanModal(movie) {
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = showMovieDetail(movie)
}








const showMovie = (m => {
    return `<div class="card" style="width: 18rem;">
            <img src="${m.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <p class="card-text">${m.Year}</p>
                <a class="btn btn-primary movie-modal-btn" data-bs-toggle="modal" data-bs-target="#movieModal" data-imdbid="${m.imdbID}">Detail</a>    
            </div>
            </div>`
})



const showMovieDetail = (m => {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h3>${m.Title}</h3></li>
                            <li class="list-group-item">Year : ${m.Year}</li>
                            <li class="list-group-item">Director : ${m.Director}</li>
                            <li class="list-group-item">Actors : ${m.Actors}</li>
                            <li class="list-group-item">Plot : ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
})








