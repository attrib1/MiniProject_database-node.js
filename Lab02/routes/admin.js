var express = require('express');
var express = require('express');
var express = require('express');

var router = express.Router();
var user = require("../repository/users");


var fileType = require('file-type');
var dateFormat = require('dateformat');
var readChunk = require('read-chunk');


/* GET home page. */
router.get('/', function (req, res, next) {
    sess = req.session;
    if (sess.user_name) {
        /*  	user.connect(function (err) {
          	            user.loadUser(function (err_query, data) {
          	                if (err) return res.send(500, "DB QUERY ERROR");
          	                res.render('admin', {
          	                    customers: data,
          	                   title: 'Express index Welcome ' + sess.user_name
          	                });
          	            });                      
                  });/// end connect*/
        user.connect(function (err) {

            user.selectTopic(function (err_query, data) {
                if (err) return res.send(500, "Db query error");
                console.log(data);
                res.render('admin', {
                    topic: data,
                    title: 'Express index Welcome ' + sess.user_name
                });

            }); //end selectTopic
        }); //end connect toopic
    } else {
        res.redirect('/');
        //res.render('index', { title: 'Express index ' });
    }

}); //end 

router.get('/topic', function (req, res, next) {

    user.connect(function (err) {

        user.selectTopic(function (err_query, data) {


            res.json(data);


        });


    });

}); //end 

router.post('/insert', function (req, res, next) {
    sess = req.session;

    var title = "underfined";
    var desc = "underfined";
    var nameimg = "nimg";
    var multiparty = require("multiparty");
    var form = new multiparty.Form();



    if (sess.user_name) {



        form.parse(req, function (err, fields, files) {
            var img = files.nimg1[0];
            var fs = require("fs");
            title = "" + fields.title;
            desc = "" + fields.desc;
            
            //console.log(img);
            fs.readFile(img.path, function (err, data) { // อ่านfile จาก img.path
                var path = "./public/images/" + img.originalFilename;


                if (err) console.log(err);

                fs.writeFile(path, data, function (err) { // save file ลง ตำแหน่ง path
                    var now = new Date();
                    var buffer = readChunk.sync(path, 0, 262);
                    var strType = fileType(buffer);
                    console.log(img);

                    var strDate = dateFormat(now, "dmyyhMMssmsl");
                    nameimg = "" + strDate + "." + strType.ext;
                    console.log(" img name : " + nameimg);
                    var newPath = "./public/images/" + nameimg;
                    if (err) throw err;
                    fs.renameSync(path, newPath);
                    //res.send('It\'s saved!');
                });

                user.connect(function (err) {
                    user.insertTopic(title, desc, nameimg, function (err_query, data) {
                        if (err) return res.send(500, "Db query insert topic error");
                        //res.send("ID : "+data);
                        res.redirect('/admin');

                    }); //end inserTopic

                }); //end connect insertTopic
            }); // end read file
        }); //end form parse



    } else {
        res.redirect('/');
    }


}); //end 



module.exports = router;