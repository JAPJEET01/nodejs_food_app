const router  = require("express").Router()
const userController   = require("../api/user/usercontroller")
const customerController   = require("../api/customer/customerController")

router.post("/addcustomer",customerController.addCustomer)

module.exports = router