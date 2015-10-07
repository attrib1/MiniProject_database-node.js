

function login(){

  this.checkLogin = function(req,res,sess){
     
      	if(req.session.user_name)
	{
		//LOGIN ถ้าล็อคอินไว้แล้วจะมีเซซชั่นข้อมูลมาแสดงผล
		res.send('index1'+req.session.user_name);
	}
	else
	{
		//NOT LOGIN GO TO LOGIN PAGE ถ้ายังไม่ได้ล็อคอินก็จะไล่ไปหน้าล็อคอินเพื่อทำการล็อคอิน
		//res.redirect('login.html');
         res.render('index', { title: 'Please Login' });
	}
           
  }


   

}//end checklogin


module.exports = new login();
