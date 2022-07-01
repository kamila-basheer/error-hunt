const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://xyz123:fvyosiRBHs3PQDvg@cluster0.77f4z4w.mongodb.net/Library?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true 
  });
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    uid : String,
    pwd: String,
});

const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;
