let express = require("express");
let path = require("path");

let app = express();

let dirPath = path.join(__dirname,"public");

app.get("/Home", (req,res)=>{
    res.sendFile(dirPath+"/Home.html");
});

app.listen(4000, ()=>{
    console.log("Server Started...");
})