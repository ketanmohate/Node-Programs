let mysql = require("mysql");

let connParam = {
    host : "localhost",
    user : "root",
    password : "ketan@9595",
    database : "nodeoperations"
}

let conn = mysql.createConnection(connParam);

conn.connect((err)=>{
    if(err){
        console.log("Connection Falid...!");
    }else{
        console.log("Cunnection Successfully...");
    }
})

conn.query("select *from registration",(err, result)=>{
    console.log("-----------------------------");
    result.forEach(row => {
        for (let key in row) 
        {
            console.log(key + " : " + row[key]);
        }
        console.log("-----------------------------");
    });
})