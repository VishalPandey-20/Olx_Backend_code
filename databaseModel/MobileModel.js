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
    Price: {
        type: Number,
        required: true,
    },
    Display: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    Camera: {
        type: String,
        required: true,
        trim: true,
    }
});

module.exports = mongose.model("mobile", carScema);
