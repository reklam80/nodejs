var express = require("express");
var app = express();
var port = 4000;

var middleware = {
    requireAutentication : function(req, res, next) {
        console.log("Özel route girildi!!");
        next();
    },
    logger : function(req,res,next) {
        console.log(req.method + " " + req.originalUrl);
        next();
    }
}
app.use(middleware.logger);

app.get("/hakkimda", middleware.requireAutentication, function(req,res){
    res.send("Hakkımda Sayfası!!");
})

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log("Express server " + port + " nolu portta çalışıyor..");
});