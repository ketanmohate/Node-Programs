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
        console.log("Connection Faild...");
    }else{
        console.log("Connection Successfully...");
    }
})

let eName = "Ketan Mohate";

conn.query("delete from employee where name = ?",[eName],(err,result)=>{
    if(err){
        console.log("Some Proble is There...!");
    }else{
        console.log("Delete Record Successfully...");
    }
})