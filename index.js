const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
//error--> require ejs

//error-->require body-parser
// const bodyParser=require('body-parser')


const PORT = process.env.PORT || 5000;
const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    },
    {
        link:"/login",
        title:"Logout"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
//error--> homeroute written in path instead of homerouter
const homeRouter = require('./src/routes/homerouter');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');



const app = new express; 




app.set('views','./src/views'); 
app.set('view engine','ejs'); 

//enabled use of cors
app.use(cors());

//error-->changed bodyparser to express
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/*',function(req,res){

    res.render('index',{});
    
});

// app.get('/*',function(req,res){
//     res.send(path);
// });

app.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`);
});


// app.listen(5000,()=>{
    //error-->port 5000 instead of 3000
//     console.log("Server Ready on 5000");
// });