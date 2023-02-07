
const mysql=require("mysql")
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"users"
})
con.connect((err)=>{//to check whether it is connected to database or not
    if(err){
        console.log("err")

    }
})



module.exports=con;