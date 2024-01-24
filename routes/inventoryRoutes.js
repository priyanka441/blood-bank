const express=require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getOrganisationController, getOrganisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require("../controllers/inventoryController");
const router=express.Router();
//routes
//add inventory || post
router.post("/create-inventory",authMiddleware,createInventoryController)

//get all blood records
router.get("/get-inventory",authMiddleware,getInventoryController)


//get donar record
router.get("/get-donars",authMiddleware,getDonarsController)

//get hospital record
router.get("/get-hospitals",authMiddleware,getHospitalController)


//get organisation record
router.get("/get-organisation",authMiddleware,getOrganisationController)

//GET orgnanisation RECORDS
router.get(
    "/get-organisation-for-hospital",
    authMiddleware,
getOrganisationForHospitalController
  );
  
  //GET RECENT BLOOD RECORDS
router.get("/get-recent-inventory",authMiddleware,getRecentInventoryController)


//GET HOSPITAL BLOOD RECORDS
router.post(
    "/get-inventory-hospital",
    authMiddleware,
   getInventoryHospitalController
  );


module.exports=router