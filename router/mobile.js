const express = require("express");
const router = express.Router();

const MobileController = require("../controller/mobile");
const verifyjwt = require("../comman-middilwere/verify")


router.post("/create/mobile",verifyjwt,MobileController.createmobile);
router.get("/get/mobile",MobileController.getAllMobile);
router.put("/update/mobile",verifyjwt,MobileController.update);
router.delete("/delete/mobile",verifyjwt,MobileController.delete);



module.exports = router

