var express = require("express"); 
eobj = express(); 
port = 5100; 
eobj.listen(port, function(){
    console.log("Codevian Server is in listening mode");
    }) 
    eobj.get("/", function(req,res){
        res.send("codevian Server connection is successful..")
        }) 