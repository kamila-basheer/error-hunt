const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://xyz123:fvyosiRBHs3PQDvg@cluster0.77f4z4w.mongodb.net/Library?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true 
  });

const Schema = mongoose.Schema;



const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;