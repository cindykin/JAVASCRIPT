const {MongoClient} = require('mongodb')

const uri = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

const dbName = 'mydb';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

client.connect((error, client) => {
    if(error) {
        return console.log('koneksi gagal');
    }
    
    // pili db
    const db = client.db(dbName)



    // nambah data
    // db.collection('students').insertMany([
    //     {
    //         name: 'Olivia',
    //         email: 'olivia@asd.xy'
    //     },
    //     {
    //         name: 'Tecno',
    //         email: 'tecno@kke.org'
    //     }
    // ],
    // (error, result) => {
    //     if(error) {
    //         console.log('gagal nambah data')
    //     }
    //     console.log(result)
    // })




    // menampilkan semua data
    // console.log(db.collection('students').find().toArray((err, result) => {
    //     console.log(result)
    // }))




    // menampilkan data berdasar kriteria
    // console.log(db.collection('students').find({name: 'Olivia'}).toArray((err, result) => {
    //     console.log(result)
    // }))




    // mengubah data 
    // const updatePromise = db.collection('students').updateOne({
    //     email: 'tecno@kke.org',
    // },

    // {
    //     $set: {
    //         name: 'hafizh',
    //     },
    // }
    // )



    // ubah data lebih dari 1 berdasar kriteria
    // const updatePromise = db.collection('students').updateMany(
    //     {name: 'Olivia'},
    //     {
    //         $set: {email: 'jeje@gmail.com'}
    //     }
    // )



    // hapus 1 data
    // db.collection('students').deleteOne({
    //     name: 'hafizh'
    // }).then((res)=> {console.log(res)}).catch((err)=> console.log(err))



    // hapus lebih dr 1 data
    db.collection('students').deleteMany({
        name : "Olivia"
    }).then(res => console.log(res))
    .catch(err => console.log(err))


    // updatePromise.then((result)=> {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // })
}) 



// try {
//     db.orders.deleteOne( { "_id" : ObjectId("563237a41a4d68582c2509da") } );
//  } catch (e) {
//     print(e);
//  }
