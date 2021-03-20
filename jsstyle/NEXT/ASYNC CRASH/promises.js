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

createPost({title: 'Post #3', body: 'This is post three'})
    .then(getPosts)
    .catch(err => console.log(err))


// promise.all
const promise1 = Promise.resolve('hai');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'goodbye'))
const promise4 = fetch('jsonplaceholder.typicode.com/users').then(res => res.json())
Promise.all([promise1, promise2, promise3, promise4])
    .then(values => console.log(values));