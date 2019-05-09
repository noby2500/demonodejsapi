

var mysql = require('mysql');
var express = require('express')
    , bodyParser = require('body-parser');
var app = express();

var con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "testapi"
});

//getall
app.get('/getUsers',function(req,res){
    sql="SELECT * FROM User"
    con.query(sql, function(err,result){
        if(err) throw err;
        //console.log(result);
        res.end(JSON.stringify(result));
       
    });
});
//getbyid
app.get('/getUsers/:id',function(req,res){
    sql="SELECT * FROM User WHERE id="+req.params.id
    con.query(sql, function(err,result){
        if(err) throw err;
        //console.log(result);
        res.end(JSON.stringify(result));
       
    });
});

//post
app.post('/addUser', function(request, response){
    var jsonRequest = request.body;
 
});

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application Run At http://%s:%s",host,port)
    con.connect();
     console.log("connected");
    
});