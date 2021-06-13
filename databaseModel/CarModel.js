const mongose = require("mongoose");

const carScema = new mongose.Schema({
    Brand: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    Variant: {
        type: Number,
        required: true,
    },
    Fuel: {
        type: String,
        required: true,
    },
    Model: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    Year: {
        type: Number,
        required: true,
    },
    No_of_Owners: {
        type: String,
        required: true,
    },
    imges: {
        type: String
    }
});

module.exports = mongose.model("car", carScema);
