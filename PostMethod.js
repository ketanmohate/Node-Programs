let express = require("express");

let mysql = require("mysql");

let app = express();

app.use(express.urlencoded({extended:true}));

app.get("/Home", (req, res)=>{
    res.sendFile(__dirname + "/public/RegistrationForm_Post.html");
})

app.post("/save", (req,res)=>{
    let n = req.body.name;
    let e = req.body.email;
    let c = req.body.contact;

    res.send(n+"  "+e+"  "+c);
    res.end();
})

app.listen(4000, ()=>{
    console.log("Server Started...");
})

