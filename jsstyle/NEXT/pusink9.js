// 10.2



$('.search-button').on('click', function() {
    

    $.ajax({                                
        url: 'http://omdbapi.com?apikey=2e1ca63e&s=' + $('.search-input').val(),
        success: results => {
            const movies = results.Search;
            console.log(movies);
            // movies.forEach(m => {
            //     $(".card-img-top").attr("src", m.Poster);
            //     $(".card-title").html(m.Title);
            //     $(".card-text").html(m.Year);
            // }); kocak awokowkwo
    
            let cards = '';
    
            movies.forEach(m => {
                cards += showMovie(m)
            })
            $('.lat-ajax').html(cards);
    
            $('.movie-modal-btn').on('click', function(){
                console.log($(this).data('id'));
                $.ajax({                                
                    url: 'http://omdbapi.com?apikey=2e1ca63e&i=' + $(this).data('id'),
                    success: m => {
                        const movieDetail = showMovieDetail(m);
                        
                        $('.modal-body').html(movieDetail);
                    }
                })
    
    
            })
    
        },
        error: (e) => {
            console.log(e.responseText);
        }
    })

})








const showMovie = (m => {
    return `<div class="card" style="width: 18rem;">
            <img src="${m.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <p class="card-text">${m.Year}</p>
                <a class="btn btn-primary movie-modal-btn" data-bs-toggle="modal" data-bs-target="#movieModal" data-id="${m.imdbID}">Detail</a>    
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





