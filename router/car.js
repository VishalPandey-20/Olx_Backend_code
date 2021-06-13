const express = require("express");
const router = express.Router();

const CarController = require("../controller/car");
const verifyjwt = require("../comman-middilwere/verify");


router.post("/create/car",verifyjwt,CarController.createCars);
router.get("/get/car",CarController.getAllCars);
router.put("/update/car",verifyjwt,CarController.update);
router.delete("/delete/car",verifyjwt,CarController.delete);



module.exports = router