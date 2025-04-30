let express = require("express");

let app = express();

app.get("/Home",(req,res)=>{
    res.send("Hello Webpage.");
});

app.listen(4000,()=>{
    console.log("Server Started...");
});