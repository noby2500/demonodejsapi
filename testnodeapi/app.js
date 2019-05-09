var express = require('express')
    , bodyParser = require('body-parser');
var app = express();
var fs = require("fs");

app.use(bodyParser.json());
//getall
app.get('/getUsers',function(req,res){
    fs.readFile( __dirname + "/" + "user.json",'utf8',function (err,data){
        console.log(data);
        res.end(data);
    });
});
//getbyid
app.get('/getUsers/:id',function(req,res){
    fs.readFile( __dirname + "/" + "user.json",'utf8',function (err,data){
        var users = JSON.parse(data)
        var user =users["user"+req.params.id]
        
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

//post
app.post('/addUser', function(request, response){
    var jsonRequest = request.body;
    fs.readFile( __dirname + "/" + "user.json",'utf8',function (err,data){
         data = JSON.parse(data)
         data["user4"] =jsonRequest;
         console.log(data);
         response.end(JSON.stringify(data));
    });
});
//delete
app.delete('/delUsers/:index',function(req,res){
    fs.readFile( __dirname + "/" + "user.json",'utf8',function (err,data){
        data = JSON.parse(data);
        delete data["user"+ req.params.index];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application Run At http://%s:%s",host,port)

});