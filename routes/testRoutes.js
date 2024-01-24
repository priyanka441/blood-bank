const express=require("express");
const { testController } = require("../controllers/testController");

//router object(router ki functionality to store krega)
const router=express.Router();

//routes
router.get("/test",testController)


//export
module.exports=router;