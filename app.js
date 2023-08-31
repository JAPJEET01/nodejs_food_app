const express = require("express")
const app =  express() 
const port = 4300
const db = require("./db/db")
const router = require("./routes/router")
app.use(express.urlencoded({extended:true}))
app.use("/admin",router)
app.listen(port,()=>{
    console.log(`server running at ${port}`)
})
