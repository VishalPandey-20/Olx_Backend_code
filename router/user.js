const express = require("express");

const router = express.Router();

const UserController  = require("../controller/user")
const {signupvalidator,isValidation} = require("../validator/user");

router.post("/signup/user",signupvalidator,isValidation,UserController.userSignUp)
router.post("/logIn/user",UserController.userLogin)


module.exports = router
