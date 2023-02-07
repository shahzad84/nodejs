const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema({
            name:String,
            age:Number,
            price:Number,
            day:String
        })
module.exports=mongoose.model("noobs",ProductSchema)