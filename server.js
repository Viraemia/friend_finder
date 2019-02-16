var express = require("express");
var path = require("path");
var PORT = 3456;
var app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(express.static("/"))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname+"/survey.html"));

})

app.post("/", function(req, res){
    console.log(req);
})

app.listen(PORT, function(error){
    if (error) {
        console.log(error);
    }
    console.log("Connected to: " + PORT);
});