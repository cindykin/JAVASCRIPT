// coba latihan 4.3


const videos = Array.from(document.querySelectorAll("[data-duration]"));

// videos.filter(function(video) { SAMA KAYA INI
//     return video.textContent.includes('asdfkj');
// }) 

const jsnext = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
                    .map(item => item.dataset.duration)
                    .map(time => {
                        // 12:50 -> [12,50]
                        let parts = time.split(':').map();
                    });





console.log(jsnext);

