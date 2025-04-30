let express = require("express");

let app = express();

app.get("/Home",(req, res)=>{
    res.send("Ketan Mohate");
});

app.get("/Services", (req,res)=>{
    res.send("This Is Service Page");
})

app.get("/Contact", (req, res)=>{
    res.send("This is Contcat Page");
});

app.listen(2000,()=>{
    console.log("Server Started...");
});