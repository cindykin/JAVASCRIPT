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

const createPost = (post) => { // membuat data
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            posts.push(post)

            const error = false;
            if(!error){
                resolve();
            } else {
                reject('sorry something bad happen')
            }
        }, 2000);
        
    })
}

async function init(){
    await createPost({title: 'Post #3', body: 'This is post three'})

    getPosts();
}

init();


// with fetch
async function getData(){
    let resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data)
} 
getData()