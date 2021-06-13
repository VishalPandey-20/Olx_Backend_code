const express = require('express');
const app = express()
app.use(express.json())

// databases
const db = require("./databaseConnection/connection");

// cookieParser
const cookieParser = require("cookie-parser")
app.use(cookieParser());


// SignUp and LogIn route
const user = require("./router/user");
app.use("/",user)

// Create Cars data route
const createCars = require("./router/car")
app.use("/",createCars);

// Create mobile data route
const createMobile = require("./router/mobile")
app.use("/",createMobile);


// Use dotenv file
const dotenv = require("dotenv").config();
const port = process.env.PORT || 7899

app.listen(port,()=>{
    console.log(`server is running on http:localhost:${port}`);
})




