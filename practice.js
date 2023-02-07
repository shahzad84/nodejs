const express=require("express")
const app=express()
app.set("view engine","ejs")
app.get("/profile",(_,res)=>{
    const user={
        name:"shahzad",
        phone:"23423",
        skills:["css","html","cool"]
    }
    res.render("profile",{user})
})
app.listen(3000)