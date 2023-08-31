const mongoose = require("mongoose")
const customerSchema  =  new mongoose.Schema({
    name:{type:String, default:""},
    email:{type:String, default:""},
    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now()},
})
module.exports= new mongoose.model("customer",customerSchema)