var express = require("express");
var middleware = require("./middleware");
var app = express();
var port = 4000;

app.use(middleware.logger);

app.get("/hakkimda", middleware.requireAutentication, function(req,res){
    res.send("Hakkımda Sayfası!!");
})

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log("Express server " + port + " nolu portta çalışıyor..");
});