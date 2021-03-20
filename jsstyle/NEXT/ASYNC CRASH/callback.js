const posts = [
    {
        title: 'Post #1',
        body: 'This is body one'
    },
    {
        title: 'Post #2',
        body: 'This is body two'
    }
]



/*
// PROBLEM : data yg baru diinput tidak ditampilkan

function getPosts () { // menampilkan data
    setTimeout(() => {
        let output;
        posts.forEach((post, i) => {
            output += `
            <ul>
                <li>${post.title}</li>
            </ul>`
            console.log(post)
        })
        document.body.innerHTML = output;
    }, 1000);
}

const createPost = (post) => { // membuat data
    setTimeout(() => {
        return posts.push(post)
    }, 2000);
}

getPosts();

createPost({title: 'Post #3', body: 'This is post three'});
*/









// SOLUSI : CALLBACK, memanggil tampil post saat buat post baru selesai

function getPosts () { // menampilkan data
    setTimeout(() => {
        let output;
        posts.forEach((post, i) => {
            output += `
            <ul>
                <li>${post.title}</li>
            </ul>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

const createPost = (post, callbacc) => { // membuat data
    setTimeout(() => {
        posts.push(post)
        return callbacc()
    }, 2000);
}

createPost({title: 'Post #3', body: 'This is post three'}, getPosts);
