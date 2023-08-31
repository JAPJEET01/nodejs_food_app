const mongoose = require("mongoose")
const Userschema  =  new mongoose.Schema({
    name:{type:String, default:""},
    email:{type:String, default:""},
    usertype:{type:String, default:""},
    password:{type:String, default:""},
    customer_id:{type:mongoose.Types.ObjectId, default:"" , ref:"customer"},
    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now()},
})
module.exports= new mongoose.model("user",Userschema)