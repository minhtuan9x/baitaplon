
const mongoose = require('mongoose')

const url = 'mongodb+srv://root:admin@cluster0.gsrso.mongodb.net/batdongsan?retryWrites=true&w=majority';

const connectionParams={
    useNewUrlParser: true, useUnifiedTopology: true   
}
function connectDB(){
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
}

module.exports = connectDB;