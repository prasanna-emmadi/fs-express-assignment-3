// const { MongoClient } = require('mongodb')

// let dbConnection

// module.exports = {
//     connectToDb: (cb:any) => {
//         MongoClient.connect('mongodb://localhost:27017/ecom')
//         .then((client) => {
//             dbConnection = client.db()
//             return cb()
//         })
//         .catch(err =>{
//             console.log(err)
//             return cb(err)
//         })
//     },
//     getDb:() => dbConnection
// }