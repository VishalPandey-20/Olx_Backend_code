
const mongose = require("mongoose");
const userScema = new mongose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true

    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    },

})

module.exports = mongose.model("user",userScema);
