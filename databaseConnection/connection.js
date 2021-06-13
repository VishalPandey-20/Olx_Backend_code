// mongodb+srv://vishal:<password>@olx2.8wgc6.mongodb.net/test
// mongodb+srv://vishal:<password>@olx2.8wgc6.mongodb.net/test


const mongoose = require("mongoose")
const url = "mongodb+srv://vishal:Pandit@000@olx2.8wgc6.mongodb.net/test"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=>{
    console.log("connect");
})
.catch((err)=>{
    console.log("databaseConnectionError");
})