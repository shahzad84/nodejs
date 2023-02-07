// it creates a new file as J.txt and write in it like "shahzad etc"
// const fs =require("fs")
// fs.writeFileSync("j.txt","this is devil")

//********************************************
//it shows how to import file like h.js in other file like index.js
// const hii= require("./h")
// console.log(hii.a)


//********************************************
// filter() method creates a new array filled with elements that pass a test provided by a function.
// const arr=[3,4,5,6,6,8,32]
// let result=arr.filter((item)=>{
//     return item ===6
// })
// console.log(result)


//********************************************

// creating server
// const http =require("http")
// // let dataresponse=(req,res)=>{
// //     res.write("<h1>shahzad is a bad boy</h1>")
// //     res.end()
// // }
// // http.createServer(dataresponse).listen(3000)

// // this is another way to write the request and response
// http.createServer((req,res)=>{
//         res.write("<h1>shahzad is a cool boy</h1>")
//         res.end()
//}).listen(3000)


//********************************************
// nodejs is single threaded because it runs one command at a time
// package.json file
// const color=require("colors")
// console.log("shahzad".green)

//********************************************
// nodejs is async 
// 1.run first script 2.run second script(complex data) ___it will not wait to finish 2nd script__
// 3.run third script 4.continue

//********************************************
//Make a simple API
// const http= require("http")
// const data =require("./data")
// http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-Type":"application\json"})
//     res.write(JSON.stringify(data));
//     res.end()

// }).listen(3000)


//********************************************
// getting input from command line
// const fs=require("fs")
// const input=process.argv;
// if(input[2]=="add"){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]=="remove"){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("invalid output")
// }
// write this in terminal: 
// node index.js add data.txt "this is taking input from terminal"

//********************************************
// creating to many file in a folder
// const fs =require("fs")
// const path =require("path")
// const dirpath=path.join(__dirname,"files")
// // for(i=0;i<5;i++)
// // {
// //     fs.writeFileSync(dirpath+"/hello"+i+".txt","shahzad")

// // }

// //reading files and listing them all
// fs.readdir(dirpath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log("files name",item)
//     })
// })


//********************************************
// CRUD operation
// const fs=require("fs")
// const path=require("path")
// const dirpath=path.join(__dirname,"crud")
// const filepath=`${dirpath}/apple.txt`

// fs.writeFileSync(filepath,"this is shahzad")

// // fs.readFile(filepath,"utf8",(err,item)=>{
// //     console.log(item)
// // })

// // fs.appendFile(filepath," cool boy",(err)=>{
// //     if(!err) console.log("file is updated")

// // })

// // fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
// //     if(!err) console.log("file is updated")
// // })

// // fs.unlinkSync(`${dirpath}/fruit.txt`)


//********************************************
// Asynchronous programming language: second task do not wait to finish the first task
// ex:
// console.log("first task")
// setTimeout(() => {
//     console.log("second task")
// }, 2000);
// console.log("third task")

// Drawback of asynchronous programming language
// let a=10
// let b=0
// setTimeout(() => {
//    b=20
// }, 2000);
// console.log(a+b)

//********************************************
// Handle Async data
// let a=10
// let b=0

// let waitingData=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(22)
//      }, 2000);
// })
// waitingData.then((data)=>{
//     console.log(a+data)
// })

//********************************************
// how nodejs works
// Diagram

// call stack (main function)      ->      nodeApis
//     <        Event loop                 >
// callback queue                   <-

// working of the bellow code is :1.call stack in this main function is call 
                                // 2.node Apis in this c,c++ function is call like settimeout()
                                // 3.Event loop(call back queue) in this data is comming from node apis and transfered to call stack after the call stack main function is executed successfully
// console.log("first task")
// setTimeout(() => {
//     console.log("second task")
// }, 2000);
// setTimeout(() => {
//     console.log("second task")
// }, 0);
// console.log("third task")


//********************************************
// express and testing api and writing html and json
// const express=require("express")
// const app=express()
// app.get("/",(req,res)=>{
//     console.log("data sent by browser=>",req.query.name)
//     res.send(`<h1>hii ${req.query.name} </h1>    <a href="/about"> go to about us  page </a>`
//     )
   
    

// })
// app.get("/about",(req,res)=>{
//     console.log("data sent by browser=>",req.query.name)
//     res.send( 
//         `[{name:"shahzad",phoneno:"2324"},{name:"cool",phoneno:"12212"}]
//         <a href="/"> go to Home  page </a>`)

// })
// app.listen(3000)

// http://localhost:3000/?name=shahzad (pass like this in browser)


//********************************************
//making html pages and removing extensions from url
// const express=require("express")
// const path=require("path")
// const app=express()
// const publicpath=path.join(__dirname,"public")
// // app.use(express.static(publicpath))
// // "/"like / we use "*" to show 404 pages
// app.get("/",(_,res)=>{
//     res.sendFile(`${publicpath}/index.html`)
// })
// app.listen(3000)


//********************************************
// Template engine: is use to make dynamic pages 
// const express=require("express")
// const app=express()
// app.set("view engine","ejs")
// app.get("/profile",(_,res)=>{
//     const user={
//         name:"shahzad",
//         phone:"23423",
//         skills:["css","html","cool"]
//     }
//     res.render("profile",{user})
// })
// app.listen(3000)


//********************************************
// Middleware: this is used to check certain condition to meet like age>18
// and route level middleware
// const express=require("express")
// const app=express()
// const reqFilter=require("./middleware")
// const route=express.Router()
// // app.use(reqFilter)
// route.use(reqFilter)

// app.get("/",(req,res)=>{
//     res.send("hii welcome")
// })
// route.get("/about",(req,res)=>{
//     res.send("about page")
// })
// app.use("/",route)
// app.listen(3000)


//********************************************
// Connect Mongodb with nodejs
// const {MongoClient} =require("mongodb")
// const url ="mongodb://localhost:27017"
// const database="inotebook"
// const client=new MongoClient(url)
// async function getData(){
//     let result=await client.connect()
//     let db=result.db(database)
//     let collection=db.collection("users")
//     let response=await collection.find({}).toArray()
//     console.log(response)
// }
// getData()

//********************************************
// Read Data from mongodb
// const dbConnect=require ("./mongodbconnect")
// // dbConnect().then((res)=>{
// //     res.find({name:"king"}).toArray().then((data)=>{
// //         console.log(data)
// //     })
// // })

// const main=async()=>{
//     let data=await dbConnect()
//     data=await data.find().toArray()
//     console.log(data)

// }
// main()


//********************************************
// inserting data in mongodb 
// const dbConnect=require ("./mongodbconnect")
// const insert=async()=>{
//     const db=await dbConnect()
//     const result =await db.insert(
//        [ {name:"shahzad",brand:"vivo"},
//        {name:"cool",brand:"djfos"}
//         ]
//     )
// if(result.acknowledged){
//     console.log("data is inserted")
// }
// }
// insert()


//********************************************
//Updating data in mongodb
// const dbConnect=require ("./mongodbconnect")
// const update=async()=>{
//     const db=await dbConnect()
//     const result =await db.update(
//       {name:"shahzad"},{
//         $set:{name:"cool",brand:"home"}
//       }
//     )
// if(result.acknowledged){
//     console.log("data is updated")
// }
// }
// update()



//********************************************
//deleting data in mongodb
// const dbConnect=require ("./mongodbconnect")
// const deleting=async()=>{
//     const db=await dbConnect()
//     const result =await db.deleteOne(
//       {name:"cool"}
//     )
// if(result.acknowledged){
//     console.log("data is deleted")
// }
// }
// deleting()


//********************************************
//Get API with mongodb
// const express=require("express")
// const dbConnect=require ("./mongodbconnect")
// const app=express()
// app.get("/",async(req,res)=>{
//     let db=await dbConnect()
//     db = await db.find().toArray()
//     res.send(db)
// })

// app.listen(3000)

//********************************************
//post API with mongodb
// const express=require("express")
// const dbConnect=require ("./mongodbconnect")
// const app=express()
// app.use(express.json())

// app.post("/",async(req,res)=>{
//   let data =await dbConnect()
//   let result=await data.insert(req.body)
//       res.send(result)
// })
// app.listen(3000)

//********************************************
//put (update) API with mongodb
// const express=require("express")
// const dbConnect=require ("./mongodbconnect")
// const app=express()
// app.use(express.json())

// app.put("/:name",async(req,res)=>{
//   let data =await dbConnect()
//  let result =data.updateOne({name:req.params.name},{$set:req.body})
//       res.send(result)
// })
// app.listen(3000)

// http://localhost:3000/shahzad  name(shahzad) should previous and update one should write in body


//********************************************
//delete api in mongodb
// const express=require("express")
// const mongodb=require("mongodb")
// const dbConnect=require ("./mongodbconnect")
// const app=express()
// app.use(express.json())

// app.delete("/:id",async(req,res)=>{
//     let data =await dbConnect()
//     const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
//       res.send(result)
// })
// app.listen(3000)


//********************************************
// create in mongoose 
// const mongoose=require("mongoose")
// const createIndb =async()=>{
//     await mongoose.connect("mongodb://localhost:27017/inotebook")
//     const ProductSchema=new mongoose.Schema({
//         name:String
//     })
// const ProductModel=mongoose.model("noobs",ProductSchema)
// let data=new ProductModel({name:"not a google"})
// let result=await data.save()
// console.log(result);

// }
// createIndb()

//********************************************
// update in mongoose 
// const mongoose=require("mongoose")
// const updateIndb =async()=>{
//     await mongoose.connect("mongodb://localhost:27017/inotebook")
//     const ProductSchema=new mongoose.Schema({
//         name:String,
//         age:Number,
//         price:Number
//     })
//     const product=mongoose.model("noobs",ProductSchema)
//     let data=await product.updateOne({name:"not a "},{$set:{price:"343",age:"3333"}})
//     console.log(data)
// }
// updateIndb()
// //********************************************
// // Delete in mongoose 
// const mongoose=require("mongoose")
// const deleteIndb =async()=>{
//     await mongoose.connect("mongodb://localhost:27017/inotebook")
//     const ProductSchema=new mongoose.Schema({
//         name:String,
//         age:Number,
//         price:Number
//     })
//     const product=mongoose.model("noobs",ProductSchema)
//     let data=await product.deleteOne({name:""})
//     console.log(data)
// }
// deleteIndb()
//********************************************
// find in mongoose 
// const mongoose=require("mongoose")
// const findIndb =async()=>{
//     await mongoose.connect("mongodb://localhost:27017/inotebook")
//     const ProductSchema=new mongoose.Schema({
//         name:String,
//         age:Number,
//         price:Number
//     })
//     const product=mongoose.model("noobs",ProductSchema)
//     let data=await product.find({name:"bool"})
//     console.log(data)
// }
// findIndb()

//********************************************
// post get delete put Api in mongoose 

// const express=require("express")
// require("./config")
// const product=require("./product")
// const app=express()
// app.use(express.json())
// app.post("/create",async(req,res)=>{
//     let data=new product(req.body)
//     let result=await data.save()
//     res.send(result)
// })
// app.get("/list",async(req,res)=>{
//     let data=await product.find()
//     res.send(data)
// })
// app.delete("/delete/:_id",async(req,res)=>{
//     let data=await product.deleteOne(req.params)
//     res.send(data)
// })
// app.put("/update/:_id",async(req,res)=>{
//     let data=await product.updateOne(req.params,{$set:req.body})
//     res.send(data)
// })
// app.listen(3000)



//********************************************
//search Api in mongoose 

// const express=require("express")
// require("./config")
// const product=require("./product")
// const app=express()
// app.use(express.json())

// app.get("/search/:key",async(req,res)=>{
//     console.log(req.params.key)
//     let data=await product.find(
//         {
//             "$or":[
                
//                     {"name":{$regex:req.params.key}},
//                     {"day":{$regex:req.params.key}}

                
//             ]
//         }
//     )
   
//     res.send(data)
// })
// app.listen(3000)


//********************************************
// upload file 

// const express=require("express")
// const multer=require("multer")
// const app=express()
// const upload=multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb){
//             cb(null,"./uploads")
//         },
//         filename:function(req,file,cb){
//             cb(null,file.fieldname + '-'+Date.now()+".jpg")
//         }
//     })
// }).single("user_file")
// app.post("/upload",upload,(req,res)=>{
//     res.send("file")
// })
// app.listen(3000)


//********************************************
// os module 
// const os =require("os")
// console.log(os.hostname())
// console.log(os.userInfo())

//********************************************
// Event and event emmiter 
// const express=require("express")
// const EventEmitter=require("events")
// const app=express()
// const event=new EventEmitter()
// let count=0
// event.on("countAPI",()=>{
//     count++;
//     console.log("event called",count)
// })
// app.get("/",(req,resp)=>{
//     resp.send("api called")
//     event.emit("countAPI")
// })
// app.listen(3000)


//********************************************
//mysql in nodejs
// const mysql=require("mysql")
// const con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"users"
// })
// // con.connect((err)=>{//to check whether it is connected to database or not
// //     if(err){
// //         console.log("err")

// //     }else{
// //         console.log("connected")
// //     }
// // })

// con.query("select * from users",(err,result)=>{
//     console.log("result",result)
// })
//********************************************
//get, post,put,post api in mysql in nodejs
// const express=require("express")
// const con=require("./getmysql")
// const app=express()
// app.use(express.json())
// app.get("/",(req,res)=>{
//     con.query("select * from users",(err,result)=>{
//     if(err){
//         res.send("err")

//     }else{
//         res.send(result)
//     }
// })
// })
// app.post("/",(req,res)=>{
//   const data=req.body
//   con.query("INsert INTO users SET ?",data,(error,result,fields)=>{
//     if(error) error;
//     res.send(result)
//   })
// })
// app.put("/:id",(req,res)=>{
//   const data=[req.body.name,req.body.email,req.params.id]
//   con.query("UPDATE users SET name= ?,email=? where id=?",data,(error,result,fields)=>{
//     if(error) error;
//     res.send(result)
//   })
// })
// app.delete("/:id",(req,res)=>{
 
//   con.query("DELETE FROM users WHERE id="+ req.params.id,(error,result,fields)=>{
//     if(error) error;
//     res.send(result)
//   })
// })

// app.listen(3000);

