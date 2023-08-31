const mongoose =  require("mongoose")
mongoose.connect("mongodb://localhost:27017/node_app")
.then(
    console.log("DB CONNECTED")
)
.catch((err)=>{
    console.log("AN ERROR OCCURED " , err)
})