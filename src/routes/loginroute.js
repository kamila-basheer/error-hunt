const express = require('express'); 
const loginRouter = express.Router();
// const user = require('../data/user');
const userdata = require('../model/UserModel');
// const user=userdata;

loginRouter.get('/',function(req,res){

    res.render('login',{});
    
})


loginRouter.post("/check",function(req,res){
    // var checkuser = {
        
        // uid:req.param("uid"),
        // pwd:req.param("pwd")
    //     uid:req.body.uid,
    //     pwd:req.body.pwd
    // };
    
    // console.log(checkuser);
    // var flag=false;

//    var flagg = user.find((e)=>{
//        for(let i=0;i<user.length;i++){
        
//         if(checkuser.uid==user[i].uid && checkuser.pwd==user[i].pwd)
//         {
            
//             flag=true;
//             break;
//         }
//         else{
//                 flag=false;
//             }
//         };

//         console.log(flag);

// if(flag==true){
//     // alert("User Verified.Click to continue");
//     res.redirect("/home")
// }
// else{
//     // alert("User Verification Failed");
//     res.redirect("/signup");
// }


//rewrote code for login
userdata.findOne({uid:req.body.uid}).exec(function(err,item){
    if(err){ res.send();}
    if(!item){
        console.log("invalid username");
        res.redirect('/login');
    } else {
        if(req.body.pwd !== item.pwd){
            console.log("Incorrect password");
            res.redirect('/login');
        } else {
            console.log("success");
            res.redirect('/home');
        }
    }
})

});




module.exports = loginRouter;