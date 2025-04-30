let express = require("express");

let app = express();

app.get("/Home",(req, res)=>{
    res.send(`<input type="text" placeholder="Enter something">`);
});

app.listen(4000,()=>{
    console.log("Server Started Successfully....");
});