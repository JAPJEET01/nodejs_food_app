const customer =  require("./CustomerModel")
const user  =  require("../user/userModel")

exports.addCustomer=(req,res)=>{
    user.findOne({email:req.body.email})
    .then(data=>{
        if(data!=null){
            res.json({
                status:400,
                success:false,
                message:"USER ALRELAY EXISTS"
            })
        }
        else{
            let userobj =  new customer()
            userobj.name = req.body.name,
            userobj.email = req.body.email
            userobj.save()
            .then(data=>{
                let uobj = new user()
                uobj.email =  data.email,
                uobj.name =  data.name,
                uobj.password =  req.body.password,
                uobj.usertype =  1
                uobj.customer_id = data._id
                uobj.save()
                .then(udata=>{
                    res.json({
                        status:200,
                        success:true,
                        massage:"CUSTOMER ADDED SUCCESSFULLY",
                        data: data,
                        user :  udata
                    })
                })

            })
        }
    })

}