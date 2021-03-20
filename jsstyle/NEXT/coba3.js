

// PROBLEMATICA

/*
outputnya hanya 2 buah objek yaitu post one dan post two.
Post three yang kita buat dari fungsi createPost ternyata tidak ada.

Hal ini terjadi karena fungsi createPost memiliki waktu proses 2 detik 
sedangkan fungsi getPosts memiliki waktu proses 1 detik.
Kita tidak ingin hal ini terjadi
*/

const posts = [
  {
    title: "Post one",
    body: "This is post one"
  },
  {
    title: "Post two",
    body: "This is post two"
  }
]

const createPost = post => {    // TAMBAH POST DIEKSEKUSI SETELAH GETPOST
  setTimeout(() => {            
    posts.push(post)
  }, 2000)
}

const getPosts = () => {       // GETPOST DIEKSEKUSI DULUAN
  setTimeout(() => {            // GETPOST = TAMPILKAN POST
    posts.forEach(post => {
      console.log(post)
    })
  }, 1000)
}

const newPost = {               // TARGET PERMASALAHAN
  title: "Post three",
  body: "This is post three"
}

createPost(newPost)     // WALAU DIPANGGIL DULUAN, TERJEDA
getPosts()          // GETPOST TETAP DITAMPILKAN PERTAMA









// SETELAH CALLBACK MENYERANG

/*
berhasil menyelesaikan masalah asynchronous dengan menggunakan teknik callback.

Namun ada sebuah masalah yang bisa saja kita temui ketika menggunakan teknik callback ini. Yaitu callback hell terjadi ketika kita membuat callback bercabang atau callback di dalam callback.
*/


const posts = [
  {
    title: "Post one",
    body: "This is post one"
  },
  {
    title: "Post two",
    body: "This is post two"
  }
]

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000)
}

const getPosts = () => {
  setTimeout(() => {
    posts.forEach(post => {
      console.log(post)
    })
  }, 1000)
}

const newPost = {
  title: "Post three",
  body: "This is post three"
}

createPost(newPost, getPosts)
getPosts()











// PROMISE MENYERANG
// cara mengatasi callback hell

const posts = [
  {
    title: "Post one",
    body: "This is post one"
  },
  {
    title: "Post two",
    body: "This is post two"
  }
]

const createPost = post => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      const error = false
      if(!error) {
        resolve()
      }else{
        reject()
      }
    }, 2000)
  })
}

const getPosts = () => {
  setTimeout(() => {
    posts.forEach(post => {
      console.log(post)
    })
  }, 1000)
}

const newPost = {
  title: "Post three",
  body: "This is post three"
}

createPost(newPost)
  .then(getPosts)
  .catch(error => console.log(error))