let mysql = require("mysql");
let express = require("express");
let path = require("path");

let app = express();

let dirPath = path.join(__dirname, "public");
app.use(express.static(dirPath)); 

app.get("/Home", (req, res) => {
    res.sendFile(path.join(dirPath, "RegistrationForm.html"));
});

let connParm = {
    host: "localhost",
    user: "root",
    password: "ketan@9595",
    database: "nodeoperations"
};

let conn = mysql.createConnection(connParm);

conn.connect(err => {
    if (err) {
        console.error("DB Connection Failed:", err);
    } else {
        console.log("DB Connected Successfully...");
    }
});

app.get("/save", (req, res) => {
    let n = req.query.name;
    let e = req.query.email;
    let c = req.query.contact;

    conn.query("INSERT INTO Registration VALUES (?, ?, ?)", [n, e, c], (err, result) => {
        if (err) {
            res.send("Some Problem is there...");
        } else {
            res.send("Registration Successfully....");
        }
    });
});

app.listen(4000, () => {
    console.log("Server Started on port 4000...");
});
