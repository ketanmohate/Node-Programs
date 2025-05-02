let mysql = require("mysql");

let connParam = {
    host : "localhost",
    user : "root",
    password : "ketan@9595",
    database : "nodeoperations"
};


let conn = mysql.createConnection(connParam);

conn.connect((err)=>{
    if(err){
        console.log("Connection Faild...!"+ err);
    }
    else{
        console.log("Connection Successfully...");
    }
})

conn.query("insert into employee values('Ketan Mohate', 'Ketan@9595' , '9595533023')",(err,result)=>{
    if(err){
        console.log("Some Problem is there...!");
    }else{
        console.log("Data Save Successfully....");
    }
});