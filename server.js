var express = require("express");
var app = express();
var middleware = require("./middleware");
var PORT = process.env.port || 3000;

app.use(middleware.logger);

app.get("/hakkimda", middleware.requireAutentication, function(req,res){
    res.send("Hakkımda Sayfası!!");
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    //var port = server.address().port;
    console.log("Express server " + PORT +  " nolu portta çalışıyor..",this.address().PORT, app.settings.env);
});