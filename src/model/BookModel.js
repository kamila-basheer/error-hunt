const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://xyz123:fvyosiRBHs3PQDvg@cluster0.77f4z4w.mongodb.net/Library?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true 
  });
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;