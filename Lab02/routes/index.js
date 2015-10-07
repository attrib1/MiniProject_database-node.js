var express = require('express');
var app = express();
var router = express.Router();
var user = require("../repository/users");





var sess;

/* GET home page. */


router.get('/', function(req, res, next) {   
     sess  = req.session;
    
    if(sess.user_name){
        	res.redirect('/admin');
    }else{
        
       res.render('index', { title: 'Express index ' });
        console.log("redrirect's  OK");
    }
     // res.render('index', { title: 'Express index ' });
  
/*user.connect(function(err){

     user.loadUser(function(err_query,data){
        if (err) return res.send(500, "DB QUERY ERROR");
        res.render('index', { customers: data,title: 'Express index' });
    });
  });
    */
});

router.post('/',function(req,res,next){
    sess = req.session;
   
     var loginSuccess=0;
    user.connect(function(){      
        user.loadUser(function(err_query,data){
           
            
            if (err_query) return res.send(500, "DB QUERY ERROR");
             for(var i = 0;i< data.length;i++){
                 var row = data[i];
                //  console.log("id : "+row.user_name+"  pass: "+row.user_pass);
                if((row.user_name == req.body.user_name)&&
                   (row.user_pass == req.body.user_pass)){                  
                      loginSuccess =1;
                       
                    }else{ loginSuccess = 0;}
             }//end for loop
            
        if (loginSuccess == 1){ 
               sess.user_name = req.body.user_name;
               sess.user_pass = req.body.user_pass;
            req.session.cookie.maxAge = 21600000;
            res.redirect('/admin');
        }
        else if (loginSuccess == 0) { 
              res.render('index', { title: 'Login Fail ' });
        }
        
        });//end loadUser
        
    });//end end connect
    

});//end post '/login'
            

module.exports = router;
