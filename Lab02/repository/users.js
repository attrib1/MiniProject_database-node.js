
function Users(){

//	this.version = "10111111";
var mysql   = require('mysql');
	var config = {

			host : "localhost",
			user : "root",
			password : "",
			database : "lab_nodejs01",
			

	}//end config

	var db = null;
    var query = null;
	this.connect =function(callback){
        

		db = mysql.createConnection(config);

		db.connect(function(err){
			if(err) {console.log(err);}

			callback(err);
		});


	}

	this.loadUser = function(callback){

		var sql = "select * from user";
		db.query(sql,function(err_query,data){

			if(err_query) console.log(err_query);
			
			callback(err_query,data);

		});

	}
    
    this.insertUser = function(username,pass,callback){
     
        var sql = "insert into user(user_name,email) VALUES ('"+username+"','"+pass+"')";
        
        db.query(sql,function(err,data){
            if(err) console.log(err);
            
            callback(err,data.insertId);
            
        });
    }

    
    
this.selectTopic = function(callback){
    
    var sql = "select id_topic,title_topic from topic";
     
  	db.query(sql,function(err_query,data){

			if(err_query) console.log(err_query);
			
			callback(err_query,data);

		});
    

}//end selectTopic

this.insertTopic = function(title,desc,nimg,callback){

    var sql = "insert into topic(title_topic,des_topic,pic_topic) values ('"+title+"','"+desc+"','"+nimg+"')";
    db.query(sql,function(err,data){
            if(err) console.log(err);
            
            callback(err,data.insertId);
            
        });


}//end insertTopic 

    

}//end Users


module.exports = new Users();
